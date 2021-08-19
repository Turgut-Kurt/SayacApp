import {FlatList, Text, View,} from 'react-native';

import { CustomButtonWithSvg } from '~components';
import {SearchInput ,HouseCard,StatusBadge} from '~components';
import React from 'react';
import {home_filter} from '~assets';
import { sizes } from '../../components/config/fonts';
import {colors} from '../../components/config/colors'

const data = {
  cards: [{
    name: "Mehmet ÖZKAN",
    an: 1234567,
    meter: 123556,
    address: "Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12",
  },
    {
    name: "Fadime DURAN",
    an: 7654321,
    meter: 587532,
    address: "Aşağı Mah. Ata Cd. Kavuncu Sk.",
  }]
}


const HousesScreen = () => {

  const onSearch = (val) => {
  console.log(val)
}

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={{marginHorizontal:16}}>
        <SearchInput
        onChange={(val) => onSearch(val)}
        />
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
