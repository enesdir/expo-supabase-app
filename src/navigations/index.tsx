import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

import HomeNavigator from './HomeNavigator';

//import {PostgrestError} from '@supabase/postgrest-js';
/** URL polyfill. Required for Supabase queries to work in React Native. */
import 'react-native-url-polyfill/auto';
import {useAuthState} from '../hooks/useAuthState';
function AppNavigator() {
  const {user} = useAuthState();
  console.log('appNavigator:', user);
  return (
    <NavigationContainer>
      {user?.uid ? <HomeNavigator /> : <AuthNavigator />}
      {/* {user?.uid ?? <AuthNavigator />} */}
    </NavigationContainer>
  );
}
export default AppNavigator;
