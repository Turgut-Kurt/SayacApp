import {Text, View, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';
import React from 'react';
import {CustomButton, BillsDetailCard} from '~components';
import { goBack } from '~utils';
import { arrow } from '~assets';
const BillDetailScreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => goBack()} style={{ margin:10}}>
          <VectorImage style={{width: 24, height: 24, marginHorizontal: 5}} source={arrow} />
      </TouchableOpacity>
      <BillsDetailCard/>
    </View>
  );
};
export {BillDetailScreen};
