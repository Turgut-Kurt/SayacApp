import HomeTabs from './HomeTabs';
import React, {useState , useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { mainStack } from '~/config/navigators';
import { SplashScreen, LoginScreen, RegisterScreen } from '~/screens';
import { useSelector, useDispatch } from 'react-redux';
import { UserAuth } from '~/store/Actions';


//import {Loading, LoginScreen, RegisterScreen, WelcomeScreen} from '~/screens';
const Stack = createStackNavigator();
const MainStack = () => {
  
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.user);

  useEffect(
    () => {
      dispatch(UserAuth());
    }, []);
    
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(
    () => {
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 2000);
    }, []);

  return (
    <Stack.Navigator
      initialRouteName={mainStack.splash}
      screenOptions={{ gestureEnabled: false, headerShown: false }}>
      {!isLogged ? (
        <>
          <Stack.Screen
            name={showSplashScreen ? mainStack.splash : mainStack.login}
            component={showSplashScreen ? SplashScreen : LoginScreen} />
          <Stack.Screen name={mainStack.register} component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name={mainStack.home_tab} component={HomeTabs} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
/*    <Stack.Screen name={mainStack.loading} component={Loading} />
      <Stack.Screen name={mainStack.welcome} component={WelcomeScreen} />
      <Stack.Screen name={mainStack.login} component={LoginScreen} />
      <Stack.Screen name={mainStack.register} component={RegisterScreen} />
*/
