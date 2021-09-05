import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseDetail,
  SearchInput,
} from '~components';
import React, {useEffect} from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import {arrow, delete_house, edit} from '~/assets';
import { fontSize, goBack, navigate, push } from '~utils';
import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import { homeStack, mainStack } from '~config';
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
      tx.executeSql('DELETE FROM houses WHERE id = ?', [id], (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Veri silindi');
        } else {
          console.log('Veri silme gerçekleştirilemedi');
        }
      },

      );
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
            onPress={() => { deleteData(data.id); push(mainStack.home_tab) }}
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
      <HouseDetail {...data} tutar={55} gecikmetutari={2} />
      <SearchInput
        containerStyle={{width: '90%'}}
        placeholder={'Fatura Arayın'}
      />
    </View>
  );
};
export {HouseDetailScreen};
