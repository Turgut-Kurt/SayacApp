import {CustomButtonWithSvg, CustomCommonHeader} from '~components';
import {FlatList, Text, View} from 'react-native';
import {HouseCard, SearchInput} from '~components';
import {fontSize, navigate} from '~utils';
import {home_add, home_filter, home_logo} from '~assets';

import React from 'react';
import {homeStack} from '~config';

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
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
        leftButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => navigate(homeStack.add_house)}
            svg={home_filter}
            text={'Filtrele'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() => navigate(homeStack.add_house)}
            svg={home_add}
            text={'Hane Ekle'}
          />
        }
      />
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
