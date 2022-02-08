import React, {useCallback} from 'react';
import {Text, Button, Input, Box, VStack, KeyboardAvoidingView} from 'native-base';
import {Image, Platform} from 'react-native';
import {useSelector, useDispatch} from '../stores';

import Layout from '../components/Layout';
import * as ImagePicker from 'expo-image-picker';
import {supabase} from '../utils/supabase';
import {Profile} from '../types/Profile';
import {clearUser, setProfile} from '../stores/userSlice';

/** URL polyfill. Required for Supabase queries to work in React Native. */
import 'react-native-url-polyfill/auto';
import {Toast} from '../helpers';
import {useGetProfile} from '../hooks/useGetProfile';

export default function AccountScreen() {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state?.user);
  const {profile} = useGetProfile();
  // const {profile} = useSelector(state => state.user);
  const [username, setUsername] = React.useState<string>();
  const [full_name, setFullname] = React.useState<string>();
  const [website, setWebsite] = React.useState<string>();
  const [isUploading, setUploading] = React.useState(false);
  const [isUpdating, setUpdating] = React.useState(false);
  console.log('profile:', profile?.id);
  console.log('profile:', user.uid);
  React.useEffect(() => {
    if (profile) {
      setUsername(profile.username || '');
      setFullname(profile.full_name || '');
      setWebsite(profile.website || '');
    }
  }, [profile]);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Toast.error('Sorry, we need camera roll permissions to upload your profile photo!');
        }
      }
    })();
  }, []);

  async function onUpload(imageUrl: string) {
    let {data, error} = await supabase
      .from<Profile>('profiles')
      .upsert({id: user?.uid, avatar_url: imageUrl});

    setUploading(false);
    if (data && data.length > 0) {
      dispatch(setProfile(data[0]));
      Toast.success('Photo uploaded successfully');
    } else {
      Toast.error('There was a problem updating your profile');
    }
  }

  async function updateProfile() {
    try {
      const updates = {
        ...profile,
        id: user!.uid,
        username,
        website: profile?.website,
        full_name,
        avatar_url: profile?.avatar_url,
        updated_at: new Date().toDateString(),
      };

      let {data, error} = await supabase.from<Profile>('profiles').upsert(updates);
      setUpdating(false);
      if (data && data.length > 0) {
        dispatch(setProfile(data[0]));
        Toast.success('Profile updated successfully');
      }
      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  function uploadImageMobile(image: ImagePicker.ImagePickerResult) {
    if (!image.cancelled) {
      let filename = image.uri?.split('/').pop();

      if (filename) {
        let matches = /\.(\w+)$/.exec(filename!);
        let type = matches ? `image/${matches[1]}` : `image`;

        const data = new FormData();

        data.append('file', {
          uri: Platform.select({
            ios: image.uri.replace('file://', ''),
            android: image.uri,
          }),
          name: filename,
          type: type,
        });

        setUploading(true);
        supabase.storage
          .from('avatars')
          .upload(filename, data)
          .then(res => {
            let result = supabase.storage.from('avatars').getPublicUrl(filename!);
            result.publicURL && onUpload(result.publicURL);
          })
          .catch(err => {
            Toast.error(err?.message || 'There was a problem uploading your photo');
          });
      }
    }
  }

  function selectPhoto() {
    ImagePicker.launchImageLibraryAsync({
      base64: false,
    }).then(uploadImageMobile);
  }
  const signOut = useCallback(() => {
    supabase.auth.signOut().then(() => {
      dispatch(clearUser());
    });
  }, [dispatch]);
  return (
    <KeyboardAvoidingView flex={1} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <Layout flex={1} justifyContent="flex-end">
        <VStack space={6}>
          <VStack space={4}>
            <Image
              source={{
                uri: profile?.avatar_url,
              }}
              style={{width: 200, height: 200, alignSelf: 'center'}}
            />
            <Button alignSelf="center" onPress={selectPhoto} isLoading={isUploading}>
              Upload
            </Button>
          </VStack>

          <Box>
            <Text>User Name</Text>
            <Input autoCapitalize="none" value={username} onChangeText={setUsername} />
          </Box>
          <Box>
            <Text>Full Name</Text>
            <Input autoCapitalize="none" value={full_name} onChangeText={setFullname} />
          </Box>
          <Box>
            <Text>Website</Text>
            <Input autoCapitalize="none" value={website} onChangeText={setWebsite} />
          </Box>

          <Button isLoading={isUpdating} onPress={updateProfile}>
            Update
          </Button>

          <Button onPress={() => signOut()} variant="ghost">
            Sign Out
          </Button>
        </VStack>
      </Layout>
    </KeyboardAvoidingView>
  );
}
