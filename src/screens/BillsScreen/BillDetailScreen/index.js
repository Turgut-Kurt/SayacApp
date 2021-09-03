import {Text, View} from 'react-native';

import React from 'react';
import {BillsDetailCard, CustomButton} from '~components';
import { goBack } from '~utils';
import styles from './styles';

const BillDetailScreen = () => {
  return (
    <View style={styles.Container}>
      <BillsDetailCard />
    </View>
  );
};
export {BillDetailScreen};
