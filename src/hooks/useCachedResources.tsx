import {Ionicons, Feather} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    enableScreens();
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
          'Ubuntu-Light': require('../../assets/fonts/Ubuntu-Light.ttf'),
          'Ubuntu-Bold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
          ...Ionicons.font,
          ...Feather.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
