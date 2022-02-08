import React from 'react';
import { extendTheme, INativebaseConfig, NativeBaseProvider } from 'native-base'
import AppNavigator from './src/navigations';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/stores';
import {StatusBar} from 'expo-status-bar';
import useCachedResources from './src/hooks/useCachedResources';

import {themes} from './src/themes';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Setting a timer',
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
]);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const theme = extendTheme({
    colors: {
      brand: {
        100: themes[3],
        200: themes[5],
      }
    }
  })

  const config: INativebaseConfig = {
    strictMode: 'off',
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient,
    }
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider theme={theme} config={config}>
            <StatusBar style="light" backgroundColor="#66cc66" translucent={false} />
            <AppNavigator />
          </NativeBaseProvider>
        </PersistGate>
      </ReduxProvider>
    );
  }
};
export default App;
