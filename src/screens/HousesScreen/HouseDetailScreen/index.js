import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton} from '~components';
import {navigate, goBack} from '~utils';
import {homeStack} from '~config';
const HouseDetailScreen = () => {
  return (
    <View>
      <Text>HouseDetailScreen</Text>
      <CustomButton
        textName={'update house'}
        onPress={() => navigate(homeStack.update_house)}
      />
      <CustomButton textName={'geri dön'} onPress={() => goBack()} />
    </View>
  );
};
export {HouseDetailScreen};
