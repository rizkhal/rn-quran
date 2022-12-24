import React from 'react';

import { NavigationContainer } from './createStackNavigator';
import CoreNavigator from './CoreNavigator';
import SplashScreen from 'react-native-splash-screen';

const AppContainer = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <CoreNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
