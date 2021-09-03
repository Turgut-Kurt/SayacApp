import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseDetail,
  SearchInput,
  HouseBillDetail,
} from '~components';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {arrow, delete_house, edit} from '~/assets';
import {fontSize, goBack, navigate} from '~utils';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {homeStack} from '~config';
import styles from './styles';

const HouseDetailScreen = ({route}) => {
  let data = route.params.item;
  let db;
  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
        console.log('Database opened:', dbRes);
      })
      .catch(e => console.log(e));
  }, []);
  const deleteData = id => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM houses WHERE id = ?', [id], (tx, result) => {
        console.log('silindi');
        console.log(result.rows.item(index));
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
            onPress={() => deleteData(data.id)}
            svg={delete_house}
            text={'Haneyi Sil'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() => navigate(homeStack.add_house)}
            svg={edit}
            text={'Hane Ekle'}
          />
        }
      />
      <HouseDetail {...data} />
      <SearchInput
        containerStyle={{width: '90%'}}
        placeholder={'Fatura Arayın'}
      />
      <HouseBillDetail
          month="Haziran"
          year="2021"
          status="Okunacak"
          value="45"
        />
        <HouseBillDetail
          month="Mayıs"
          year="2021"
          status="Ödenecek:"
          value="45"
        />
        <HouseBillDetail
          month="Nisan"
          year="2021"
          status="Ödenecek:"
          value="12"
        />
        <HouseBillDetail
          month="Mart"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
        <HouseBillDetail
          month="Şubat"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
        <HouseBillDetail
          month="Ocak"
          year="2021"
          status="Tamamlandı"
          value="12"
        />
    </View>
  );
};
export {HouseDetailScreen};
