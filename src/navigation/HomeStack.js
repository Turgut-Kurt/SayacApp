import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {homeStack} from '~config';
import {HousesScreen, AddHouseScreen} from '~/screens';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={homeStack.houses}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={homeStack.houses} component={HousesScreen} />
      <Stack.Screen name={homeStack.add_house} component={AddHouseScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
/*    <Stack.Screen name={mainStack.loading} component={Loading} />
      <Stack.Screen name={mainStack.welcome} component={WelcomeScreen} />
      <Stack.Screen name={mainStack.login} component={LoginScreen} />
      <Stack.Screen name={mainStack.register} component={RegisterScreen} />
*/
