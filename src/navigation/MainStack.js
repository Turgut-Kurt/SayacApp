import HomeTabs from './HomeTabs';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {mainStack} from '~/config/navigators';

//import {Loading, LoginScreen, RegisterScreen, WelcomeScreen} from '~/screens';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.home_tab}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={mainStack.home_tab} component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
/*    <Stack.Screen name={mainStack.loading} component={Loading} />
      <Stack.Screen name={mainStack.welcome} component={WelcomeScreen} />
      <Stack.Screen name={mainStack.login} component={LoginScreen} />
      <Stack.Screen name={mainStack.register} component={RegisterScreen} />
*/
