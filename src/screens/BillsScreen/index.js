import { Text, View, FlatList, ScrollView } from 'react-native';
import { BillsCard, BillsDetailCard,BillsHeader} from '~components';
//import { SearchInput } from '~components';

import { StatusHeader } from '~components';
import React from 'react';

import { HouseDetail, HouseBillDetail } from '~components';
import { arrow_right } from '~/assets';


const BillsScreen = () => {

  const data = {
    cards: [{
      status: "Tamamlandı",
      an: "1111111",
      name: 'Mehmet Özkan',
      tc: '15555555555',
      date: 'Ağustos 2021'
    },
    {
      status: "Okunacak",
      an: "1111111",
      name: 'Fadime Duran',
      tc: '15555555555',
      date: 'Temmuz 2021'
    },
    {
      status: "Ödenecek",
      an: "1111111",
      name: 'Halime Duran',
      tc: '15555555555',
      date: 'Temmuz 2021'
    }],
  };
  
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
        <BillsHeader />
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
      </View>
  );
};
export {BillsScreen};
