import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from '../stores/';
import {supabase} from '../utils/supabase';
import {Profile} from '../types/Profile';
import {PostgrestError} from '@supabase/postgrest-js';
/** URL polyfill. Required for Supabase queries to work in React Native. */
import 'react-native-url-polyfill/auto';
import {setProfile} from '../stores/userSlice';

export const useGetProfile = () => {
  const {profile, user} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [getErr, setGetErr] = useState('');
  useEffect(() => {
    console.log('hooks: fetch');
    const getProfile = async (): Promise<{
      profile: Profile | null;
      error: PostgrestError | null;
    }> => {
      const {data, error} = await supabase
        .from<Profile>('profiles')
        .select(`*`)
        .eq('id', user.uid)
        .single();

      if (data) {
        setIsLoading(false);
        console.log('hooks:', data);
        return dispatch(setProfile(data));
      } else {
        setProfile(null);
        console.log('hooks:', error?.message);
        return setGetErr(error?.message);
      }
    };

    return () => {
      getProfile();
    };
  }, []);

  return {
    profile,
    isLoading,
    getErr,
  };
};
