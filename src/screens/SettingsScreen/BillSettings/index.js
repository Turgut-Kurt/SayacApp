import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton} from '~components';
import {goBack} from '~utils';
const BillSettings = () => {
  return (
    <View>
      <Text>BillSettings</Text>
      <CustomButton textName={'ayarlar dön'} onPress={() => goBack()} />
    </View>
  );
};
export {BillSettings};
