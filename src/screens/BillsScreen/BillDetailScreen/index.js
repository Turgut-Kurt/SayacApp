import {BillsDetailCard, CustomButton, CustomModal} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {arrow, centerfocus, checkGray, home, meterRead} from '~assets';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {goBack} from '~utils';

const BillDetailScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [meterReadSuccess, setMeterReadSuccess] = useState(false);
  const [meterValue, setMeterValue] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const data = route.params;
  let db;

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
            'UPDATE bills SET faturadurumu = ? WHERE id = ?',
            ['Ödenecek', data.id],
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

  useEffect(() => {
    setMeterReadSuccess(false);
  }, []);

  const changeModalVisible = () => {
    setModalVisible(!modalVisible);
    //setTime()
  };

  const changeModalSuccessVisible = () => {
    setModalSuccessVisible(!modalSuccessVisible);
    setTime();
    setMeterReadSuccess(true);
    updateData();
  };

  const setMeter = value => {
    setMeterValue(value);
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
        data={data}
        status={data.faturadurumu}
        readSuccess={meterReadSuccess}
        currentTime={currentTime}
      />

      <CustomModal
        visibleValue={modalVisible}
        closeFunc={changeModalVisible}
        openFunc={changeModalSuccessVisible}
        inputNumber={1}
        buttonNumber={2}
        modalText="Sayaçta okuduğunuz değeri giriniz"
        onPress={() => changeModalVisible()}
        buttonOneText="Kaydet"
      />
      <CustomModal
        visibleValue={modalSuccessVisible}
        closeFunc={changeModalSuccessVisible}
        buttonNumber={1}
        modalText="Sayaç başarıyla okundu"
        buttonOneText="Tamam"
        svg={meterRead}
      />

      <CustomButton textName="Sayaç Oku" onPress={() => changeModalVisible()} />
    </View>
  );
};
export {BillDetailScreen};
