import MainStack from './navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './store';

import {navigationRef} from '~utils';

const App = () => {
  return (
    
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaView style={{flex: 1}}>
            <MainStack />
          </SafeAreaView>
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    
  );
};
export default App;
