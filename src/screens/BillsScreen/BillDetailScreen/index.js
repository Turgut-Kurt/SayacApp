import 'moment/locale/tr';

import {BillsDetailCard, CustomButton, CustomModal, colors} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {arrow, centerfocus, checkGray, home, meterRead, wallet} from '~assets';
import {calcWidth, fontSize, goBack} from '~utils';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {calculateBill} from '~helpers';
import moment from 'moment';

const BillDetailScreen = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [value, setValue] = useState('');
  const [update, setUpdate] = useState(false);
  const data = route.params;

  let generalDate = new Date();
  let miliSeconds = generalDate.setHours(generalDate.getHours());
  let minDate = new Date(miliSeconds);
  let db;
  let hesapla;

  const [items, setItems] = useState([]);
  const [bills, setBills] = useState([]);

  useEffect(() => {
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
  }, [update]);

  const readData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM houses INNER JOIN bills ON houses.id = bills.housesid WHERE bills.id = ?',
        //'SELECT * FROM bills;',
        [data.id],
        (tx, result) => {
          setItems(result.rows.item(0));
        },
      );
      tx.executeSql('SELECT * FROM billsSettings;', [], (tx, result) => {
        setBills(result.rows.item(0));
      });
    });
  };

  const updateData = async () => {
    SQLite.enablePromise(true);
    const db = await SQLite.openDatabase({
      name: 'sayacdb.db',
      createFromLocation: 1,
    });
    if (data.id.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE bills SET faturadurumu = ?, okunandeg = ?, okundugutarihi = ?, tutar = ? WHERE id = ?',
            ['Ödenecek', value, `${miliSeconds}`, `${hesapla}`, data.id],

            () => {
              Alert.alert('Success!', 'Your data has been updated.');
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const setTime = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    setCurrentTime(
      date + '/' + month + '/' + year + ',    ' + hours + '.' + min,
    );
  };

  const changeModalVisible = () => {
    setModalVisible(!modalVisible);
    //setTime()
  };

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const changeModalVisible1 = async () => {
    setModalVisible1(!modalVisible1);
    SQLite.enablePromise(true);
    const db = await SQLite.openDatabase({
      name: 'sayacdb.db',
      createFromLocation: 1,
    });
    if (data.id.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE bills SET faturadurumu = ?, odemetarihi = ? WHERE id = ?',
            ['Tamamlandı', `${miliSeconds}`, data.id],

            () => {
              Alert.alert('Success!', 'Your data has been updated.');
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeModalSuccessVisible = () => {
    setModalSuccessVisible(!modalSuccessVisible);
    setTime();

    updateData();
  };

  const calculate = () => {
    hesapla = calculateBill(
      value,
      data.oncekisayacdeg,
      data.birimfiyat,
      data.atiksubedeli,
      data.kdvorani,
      data.ctvbedeli,
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={() => goBack()} style={{margin: 10}}>
        <VectorImage
          style={{width: 24, height: 24, marginHorizontal: 5}}
          source={arrow}
        />
      </TouchableOpacity>
      <BillsDetailCard
        billsStatus={items.faturadurumu}
        data={items}
        id={data.id}
        bills={bills}
        status={items.faturadurumu}
        currentTime={currentTime}
      />

      <CustomModal
        visibleValue={modalVisible}
        closeFunc={changeModalVisible}
        openFunc={changeModalSuccessVisible}
        inputNumber={1}
        buttonNumber={2}
        modalText="Sayaçta okuduğunuz değeri giriniz"
        setValue={setValue}
        onPress={() => changeModalVisible()}
        buttonOneText="Kaydet"
        runFunc={calculate}
      />
      <CustomModal
        visibleValue={modalSuccessVisible}
        closeFunc={() => {
          setModalSuccessVisible(!modalSuccessVisible);
          changeUpdate();
        }}
        buttonNumber={1}
        modalText="Sayaç başarıyla okundu"
        buttonOneText="Tamam"
        svg={meterRead}
      />
      <CustomModal
        visibleValue={modalVisible1}
        closeFunc={() => {
          setModalVisible1(!modalVisible1);
          changeUpdate();
        }}
        buttonNumber={1}
        modalText={'Ödeme başarıyla alındı.'}
        buttonOneText="Tamam"
        svg={wallet}
      />
      {console.log(value)}
      {items.faturadurumu == 'Okunacak' ? (
        <CustomButton
          textName="Sayaç Oku"
          onPress={() => changeModalVisible()}
        />
      ) : items.faturadurumu == 'Ödenecek' ? (
        <View>
          <CustomButton
            textName="Ödeme Al"
            onPress={() => changeModalVisible1()}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: fontSize(16),
            }}>
            <CustomButton
              buttonStyle={{width: calcWidth(42)}}
              textName="Yazdır"
              onPress={() => changeModalVisible()}
            />
            <CustomButton
              buttonColor={'white'}
              textColor={colors.MainBlue}
              buttonStyle={{
                width: calcWidth(42),
                borderWidth: 2,
                borderColor: colors.MainBlue,
              }}
              textName="Yeniden Oku"
              onPress={() => changeModalVisible()}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: fontSize(16),
          }}>
          <CustomButton
            buttonStyle={{width: calcWidth(42)}}
            textName="Yazdır"
            onPress={() => changeModalVisible()}
          />
          <CustomButton
            buttonColor={'white'}
            textColor={colors.MainBlue}
            buttonStyle={{
              width: calcWidth(42),
              borderWidth: 2,
              borderColor: colors.MainBlue,
            }}
            textName="Yeniden Oku"
            onPress={() => changeModalVisible()}
          />
        </View>
      )}
    </View>
  );
};
export {BillDetailScreen};
