import { Alert, Text, TouchableOpacity, View } from 'react-native';
import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseDetail,
  SearchInput,
} from '~components';
import React, {useEffect, useState} from 'react';
import {arrow, delete_house, edit} from '~/assets';
import {fontSize, goBack, navigate, push} from '~utils';
import {homeStack, mainStack} from '~config';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import styles from './styles';

const HouseDetailScreen = ({route, navigation}) => {
  let item = route.params.item;
  let db;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SQLite.enablePromise(true);
      SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
        .then(dbRes => {
          db = dbRes;
          console.log('Database opened:', dbRes);
        })
        .catch(e => console.log(e));
      setTimeout(() => {
        readData();
      }, 1000);
    });
    return unsubscribe;
  }, [navigation]);

  const readData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM houses WHERE id=?',
        [item.id],
        (tx, result) => {
          setItems(result.rows.item(0));
        },
      );
    });
  };

  const deleteData = id => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM houses WHERE id = ?', [id], (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Veri silindi');
        } else {
          console.log('Veri silme gerçekleştirilemedi');
        }
      });
    });
  };

  return (
    <View style={styles.Container}>
      <CustomCommonHeader
        backButton={
          <TouchableOpacity onPress={() => goBack()}>
            <VectorImage source={arrow} />
          </TouchableOpacity>
        }
        activeBottom={false}
        leftButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => {
              deleteData(item.id);
              push(mainStack.home_tab);
            }}
            svg={delete_house}
            text={'Haneyi Sil'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() =>
              navigate(homeStack.update_house, {
                items: items,
              })
            }
            svg={edit}
            text={'Düzenle'}
          />
        }
      />
      {console.log('items')}
      {console.log(items)}
      <HouseDetail {...items} tutar={55} gecikmetutari={2} />
      <SearchInput
        containerStyle={{width: '90%'}}
        placeholder={'Fatura Arayın'}
      />
    </View>
  );
};
export {HouseDetailScreen};
