import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton} from '~components';
import {goBack} from '~utils';
const UpdateHouseScreen = () => {
  return (
    <View>
      <Text>UpdateHouseScreen</Text>
      <CustomButton textName={'geri dön'} onPress={() => goBack()} />
    </View>
  );
};
export {UpdateHouseScreen};
