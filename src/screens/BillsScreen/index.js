import {
  BillsCard,
  BillsDetailCard,
  BillsHeader,
  StatusHeader,
} from '~components';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HouseBillDetail, HouseDetail} from '~components';

import React from 'react';
import {navigate} from '~utils';
import {billStack} from '~config';

const BillsScreen = () => {
  const data = {
    cards: [
      {
        status: 'Tamamlandı',
        an: '1111111',
        name: 'Mehmet Özkan',
        tc: '15555555555',
        date: 'Ağustos 2021',
      },
      {
        status: 'Okunacak',
        an: '1111111',
        name: 'Fadime Duran',
        tc: '15555555555',
        date: 'Temmuz 2021',
      },
      {
        status: 'Ödenecek',
        an: '1111111',
        name: 'Halime Duran',
        tc: '15555555555',
        date: 'Temmuz 2021',
      },
    ],
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BillsHeader onPress={() => navigate(billStack.bill_detail)} />
      <FlatList
        //ListHeaderComponent={() => (<SearchInput/>)}
        renderItem={({item}) => <BillsCard {...item} />}
        data={data.cards}
        keyExtractor={(item, index) => index.toString()}
      />
      <BillsDetailCard />
      <View>
        <HouseDetail />
        <HouseBillDetail
          month="Haziran"
          year="2021"
          status="Okunacak"
          value="45"
        />
        <HouseBillDetail
          month="Mayıs"
          year="2021"
          status="Ödenecek:"
          value="45"
        />
        <HouseBillDetail
          month="Nisan"
          year="2021"
          status="Ödenecek:"
          value="12"
        />
        <HouseBillDetail
          month="Mart"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
        <HouseBillDetail
          month="Şubat"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
        <HouseBillDetail
          month="Ocak"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
        <StatusHeader />
      </View>
    </View>
  );
};
export {BillsScreen};
