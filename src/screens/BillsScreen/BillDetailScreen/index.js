import {BillsDetailCard, CustomButton, CustomModal} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {arrow, centerfocus, checkGray, home, meterRead} from '~assets';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {calculateBill} from '~helpers';
import {goBack} from '~utils';

const BillDetailScreen = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [meterReadSuccess, setMeterReadSuccess] = useState(false);
  const [meterValue, setMeterValue] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [value, setValue] = useState('');
  const [update, setUpdate] = useState(false);
  const data = route.params;
  
  let db;
  let hesapla;


  console.log("--------data-----------");
  console.log(data);
  console.log("data id :      " + data.id)
  

  const [items, setItems] = useState([]);
  console.log("ITEMS----------------")
  console.log(items);

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
          console.log("22222222222")
          console.log(result.rows.item(0))
          setItems(result.rows.item(0));
        },
      );
     });
  };
  

  
 

   const updateData = async () => {

    SQLite.enablePromise(true);

    const db = await SQLite.openDatabase({
      name: 'sayacdb.db',
      createFromLocation: 1,

    });
    if (data.id.length == 0) {

      Alert.alert('Warning!', 'Please write your data.')
    } else {

      try {
        console.log("hesapla : ")
       console.log(hesapla)
         db.transaction((tx) => {
          tx.executeSql(
            "UPDATE bills SET faturadurumu = ?, okunandeg = ?, tutar = ? WHERE id = ?",
            [
              'Ödenecek',
              value,
              `${hesapla}`,
              data.id,
            ],
            
            () => { Alert.alert('Success!', 'Your data has been updated.') },
            error => { console.log(error) }
          )
        })
        }  catch (error) {
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

  const changeUpdate = () => {
    setUpdate(!update);
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
  const calculate = () => {
      hesapla = calculateBill(
      value,
      data.ilksayacdeg,
      data.birimfiyat,
      data.atiksubedeli,
      data.kdvorani,
      data.ctvbedeli,
    );
    console.log('hesapla');
    console.log(hesapla);
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
        readSuccess={items.faturadurumu }
        data={items}
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
        closeFunc={() => { setModalSuccessVisible(!modalSuccessVisible); changeUpdate()}}
        buttonNumber={1}
        modalText="Sayaç başarıyla okundu"
        buttonOneText="Tamam"
        svg={meterRead}
      />
      {console.log(value)}
      <CustomButton textName="Sayaç Oku" onPress={() => changeModalVisible()} />
    </View>
  );
};
export {BillDetailScreen};
