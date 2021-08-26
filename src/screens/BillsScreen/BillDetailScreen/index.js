import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton} from '~components';
import {goBack} from '~utils';
const BillDetailScreen = () => {
  return (
    <View>
      <Text>BillDetailScreen</Text>
      <CustomButton textName={'geri dön'} onPress={() => goBack()} />
    </View>
  );
};
export {BillDetailScreen};
