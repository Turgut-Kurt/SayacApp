import { Text, View, FlatList, ScrollView } from 'react-native';
import { BillsCard, BillsDetailCard,BillsHeader, SearchInput} from '~components';
//import { SearchInput } from '~components';

import { StatusHeader , CustomCommonHeader, CustomButtonWithSvg} from '~components';
import React from 'react';

import { HouseDetail, HouseBillDetail,} from '~components';
import { arrow_right, home_logo, home_filter, home_add, delete_house } from '~/assets';


import {navigate , fontSize} from '~utils';
import {billStack, homeStack, mainStack} from '~config';

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
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
        leftButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => navigate(homeStack.add_house)}
            svg={delete_house}
            text={'Faturayı Sil'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() => navigate(homeStack.add_house)}
            svg={home_filter}
            text={'Filtrele'}
          />
        }
      />
      <StatusHeader />
      <SearchInput
        placeholder={"Sayaç Arayın"}
        containerStyle={{width: '90%'}}
      />
      <FlatList
        //ListHeaderComponent={() => (<SearchInput/>)}
        renderItem={({ item }) => <BillsCard
          {...item}
          onPress={() => navigate(billStack.bill_detail)}
        />}
        data={data.cards}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <View>
        
        
        
      </View>
    </View>
  );
};


export {BillsScreen};
