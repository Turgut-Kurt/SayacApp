import {BillsCard, BillsDetailCard, BillsHeader} from '~components';
import {
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseBillDetail,
  HouseDetail,
} from '~components';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {arrow_right, home_add, home_filter, home_logo} from '~assets';
import {fontSize, navigate} from '~utils';

import React from 'react';
import {StatusHeader} from '~components';
import {billStack} from '~config';

//import { SearchInput } from '~components';

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
        sn: 123456,
      },
      {
        id: 1,
        status: 'Okunacak',
        an: 2222222,
        name: 'Fadime Duran',
        tc: 888888888888,
        date: 'Temmuz 2021',
        sn: 987654,
      },
      {
        id: 2,
        status: 'Ödenecek',
        an: 3333333,
        name: 'Halime Duran',
        tc: 777777777777,
        date: 'Haziran 2021',
        sn: 123789,
      },
    ],
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
        rightButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => navigate(homeStack.add_house)}
            svg={home_filter}
            text={'Ağustos 2021'}
          />
        }
      />
      <FlatList
        renderItem={({item}) => <BillsCard {...item} />}
        data={data.cards}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export {BillsScreen};
