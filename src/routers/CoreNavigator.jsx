import React from 'react';
import { Home } from '../screens';
import { createNativeStackNavigator } from './createStackNavigator';

const Stack = createNativeStackNavigator();

const CoreNavigator = React.memo(() => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
));

export default CoreNavigator;
