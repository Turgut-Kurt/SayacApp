import {CustomButtonWithSvg, CustomCommonHeader} from '~components';
import {FlatList, Text, View} from 'react-native';
import {HouseCard, SearchInput} from '~components';
import React, {useState} from 'react';
import {fontSize, navigate} from '~utils';
import {home_add, home_filter, home_logo} from '~assets';

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
  const [cardData, setCardData] = useState(data.cards);

  const onSearch = val => {
    const filteredData = data.cards.filter(
      x =>
        x.name.toLowerCase().includes(val.toLowerCase()) ||
        x.an.toString().startsWith(val),
    );
    setCardData(filteredData);

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
        renderItem={({item}) => (
          <HouseCard
            {...item}
            onPress={() => navigate(homeStack.house_detail)}
          />
        )}
        data={cardData}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export {HousesScreen};
