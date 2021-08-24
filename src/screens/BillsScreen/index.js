import { Text, View } from 'react-native';
import { StatusHeader } from '~components';
import React from 'react';

import { HouseDetail, HouseBillDetail } from '~components';
import { arrow_right } from '~/assets';


const BillsScreen = () => {
  return (
    <View>
      <HouseDetail />
      <HouseBillDetail
        month='Haziran'
        year='2021'
        status="Okunacak"
        value='45'
      />
      <HouseBillDetail
        month='Mayıs'
        year='2021'
        status="Ödenecek:"
        value='45'
      />
      <HouseBillDetail
        month='Nisan'
        year='2021'
        status="Ödenecek:"
        value='12'
      />
      <HouseBillDetail
        month='Mart'
        year='2021'
        status="Tamamlandı"
        value='12'
      />
      <HouseBillDetail
        month='Şubat'
        year='2021'
        status="Tamamlandı"
        value='12'
      />
      <HouseBillDetail
        month='Ocak'
        year='2021'
        status="Tamamlandı"
        value='12'
      />
      <StatusHeader />
      
    </View>
  );
};
export {BillsScreen};
