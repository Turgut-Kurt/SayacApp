import { Text, View, FlatList, ScrollView } from 'react-native';
import { BillsCard, BillsDetailCard,BillsHeader} from '~components';
//import { SearchInput } from '~components';
import React from 'react';

const BillsScreen = () => {

  const data = {
  cards: [{
    status: "Tamamlandı",
    an: "1111111",
    name: 'Mehmet Özkan',
    tc: '15555555555',
    date:'Ağustos 2021'
  },
    {
    status: "Okunacak",
    an: "1111111",
    name: 'Fadime Duran',
    tc: '15555555555',
    date:'Temmuz 2021'
      },
    {
    status: "Ödenecek",
    an: "1111111",
    name: 'Halime Duran',
    tc: '15555555555',
    date:'Temmuz 2021'
      }],
  }
  
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
    </View>
  );
};
export {BillsScreen};
