import {FlatList, Text, View} from 'react-native';
import {HouseCard, SearchInput, StatusBadge} from '~components';

import {CustomButtonWithSvg} from '~components';
import React from 'react';
import {colors} from '../../components/config/colors';
import {home_filter} from '~assets';
import {navigate} from '~utils';
import {homeStack} from '~config';
//import {sizes} from '../../components/config/fonts';
const data = {
  cards: [
    {
      name: 'Mehmet ÖZKAN',
      an: 1234567,
      meter: 123556,
      address: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
    },
    {
      name: 'Fadime DURAN',
      an: 7654321,
      meter: 587532,
      address: 'Aşağı Mah. Ata Cd. Kavuncu Sk.',
    },
  ],
};

const HousesScreen = () => {
  const onSearch = val => {
    console.log(val);
  };

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Text>HousesScreen</Text>
      <CustomButtonWithSvg onPress={() => navigate(homeStack.add_house)} />
      <CustomButtonWithSvg />
      <CustomButtonWithSvg svg={home_filter} text={'Filtrele'} />
      <View style={{marginHorizontal: 16}}>
        <SearchInput onChange={val => onSearch(val)} />
      </View>

      <FlatList
        renderItem={({item}) => <HouseCard {...item} />}
        data={data.cards}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export {HousesScreen};
