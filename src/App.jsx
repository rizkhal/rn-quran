import React from 'react';
import colors from 'tailwindcss/colors';
import { LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppContainer from './routers/AppContainer';
import { registerGlobalFunctions } from './utils/registerGlobalHelpers';

LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method',
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method',
]);

registerGlobalFunctions();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.green[500]}
        />
        <AppContainer />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
