import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton} from '~components';
import {goBack} from '~utils';
const AddHouseScreen = () => {
  return (
    <View>
      <Text>AddHouse</Text>
      <CustomButton textName={'geri dön'} onPress={() => goBack()} />
    </View>
  );
};
export {AddHouseScreen};
