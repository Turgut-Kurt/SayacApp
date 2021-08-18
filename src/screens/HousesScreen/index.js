import {CustomButton, CustomButtonWithSvg} from '~components';
import {Text, View} from 'react-native';

import React from 'react';
import {home_filter} from '~assets';

const HousesScreen = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Text>HousesScreen</Text>
      <CustomButtonWithSvg />
      <CustomButtonWithSvg />
      <CustomButtonWithSvg svg={home_filter} text={'Filtrele'} />
      <CustomButton />
    </View>
  );
};
export {HousesScreen};
