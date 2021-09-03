import {CustomButtonWithSvg, CustomCommonHeader} from '~components';
import {FlatList, Text, View} from 'react-native';
import {HouseCard, SearchInput} from '~components';
import React, {useEffect, useState} from 'react';
import {fontSize, navigate} from '~utils';
import {home_add, home_filter, home_logo} from '~assets';

import SQLite from 'react-native-sqlite-storage';
import {homeStack} from '~config';

const HousesScreen = () => {
  let db;
  
  
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
        console.log('Database opened:', dbRes);
        readData();
      })
      .catch(e => console.log(e));
  
  }, []);

    const readData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM houses', [], (tx, result) => {
        let temp = [];
        console.log('result', result);
        for (let index = 0; index < result.rows.length; index++) {
          temp.push(result.rows.item(index));
          console.log(result.rows.item(index));
          setItems(temp);
          
          
        }
        //console.log(result.rows.item[0]);
      });
    });
  };


  const onSearch = val => {
    
    const filteredData = items.filter(
      x =>
        x.isimsoyisim.toLowerCase().includes(val.toLowerCase()) ||
        x.aboneno.toString().startsWith(val)
    );
    setItems(filteredData);

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
            onPress={() =>
              navigate(homeStack.house_detail, {
                item: item,
              })
            }
          />
        )}
        data={items}
        
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export {HousesScreen};
