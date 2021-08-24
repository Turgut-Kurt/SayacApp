import {Text, View} from 'react-native';

import React from 'react';
import { MontlyStatusCard, MontsButton } from '~/components';

const StatusScreen = () => {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      
      <MontlyStatusCard />
    </View>
  );
};
export {StatusScreen};
