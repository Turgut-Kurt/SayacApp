import { Text, View, FlatList, ScrollView } from 'react-native';
import { BillsCard, BillsDetailCard, BillsHeader } from '~components';
//import { SearchInput } from '~components';

import { StatusHeader } from '~components';
import React from 'react';

import { HouseDetail, HouseBillDetail } from '~components';
import { arrow_right } from '~/assets';


import { navigate } from '~utils';
import { billStack } from '~config';

const BillsScreen = () => {
  const data = {
    cards: [
      {
        id: 0,
        status: 'Tamamlandı',
        an: 1111111,
        name: 'Mehmet Özkan',
        tc: 999999999999,
        date: 'Ağustos 2021',
        sn: 123456
      },
      {
        id: 1,
        status: 'Okunacak',
        an: 2222222,
        name: 'Fadime Duran',
        tc: 888888888888,
        date: 'Temmuz 2021',
        sn: 987654
      },
      {
        id: 2,
        status: 'Ödenecek',
        an: 3333333,
        name: 'Halime Duran',
        tc: 777777777777,
        date: 'Haziran 2021',
        sn: 123789
      },
    ],
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <BillsHeader />
      <FlatList
        //ListHeaderComponent={() => (<SearchInput/>)}
        renderItem={({ item }) => <BillsCard {...item} />}
        data={data.cards}
        keyExtractor={(item, index) => item.id}
      />
      {/* <BillsDetailCard />
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
      </View> */}
    </View>
  );
};


export { BillsScreen };
