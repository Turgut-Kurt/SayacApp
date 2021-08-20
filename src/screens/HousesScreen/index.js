import {Text, View} from 'react-native';

import {CustomButtonWithSvg} from '~components';
import React from 'react';
import {home_filter} from '~assets';
//import {sizes} from '../../components/config/fonts';

const HousesScreen = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Text>HousesScreen</Text>
      <CustomButtonWithSvg />
      <CustomButtonWithSvg />
      <CustomButtonWithSvg svg={home_filter} text={'Filtrele'} />
    </View>
  );
};
export {HousesScreen};
