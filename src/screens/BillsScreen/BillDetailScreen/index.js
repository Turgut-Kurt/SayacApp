import {Text, View, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';
import React, {useEffect,useState} from 'react';
import {CustomButton, BillsDetailCard, CustomModal} from '~components';
import { goBack } from '~utils';
import { centerfocus, home, checkGray, arrow, meterRead } from '~assets';

const BillDetailScreen = ({ route }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [meterReadSuccess, setMeterReadSuccess] = useState(false);
  const [meterValue, setMeterValue] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
    
  
 

  const setTime = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    setCurrentTime(date + '/' + month + '/' + year + ',    ' + hours + '.' + min);
  }

  
  useEffect(() => {
        setMeterReadSuccess(false);
    }, []);
  
  const changeModalVisible = () => {
        setModalVisible(!modalVisible)                
        //setTime()
  }

  const changeModalSuccessVisible = () => {
    setModalSuccessVisible(!modalSuccessVisible)
    setTime()
    setMeterReadSuccess(true);
  }

  const setMeter = (value) => {
    setMeterValue(value);
  }
  
  return (
    <View>
      <TouchableOpacity onPress={() => goBack()} style={{ margin:10}}>
          <VectorImage style={{width: 24, height: 24, marginHorizontal: 5}} source={arrow} />
      </TouchableOpacity>
      <BillsDetailCard {...route.params} readSuccess={meterReadSuccess} currentTime={currentTime} />
      
      <CustomModal
        visibleValue={modalVisible}
        closeFunc={changeModalVisible}
        openFunc={changeModalSuccessVisible}
        inputNumber={1}
        buttonNumber={2}
        modalText='Sayaçta okuduğunuz değeri giriniz'
        onPress={() => changeModalVisible()}
        buttonOneText='Kaydet'
        
            />
      <CustomModal
        visibleValue={modalSuccessVisible}
        closeFunc={changeModalSuccessVisible}
        buttonNumber={1} modalText='Sayaç başarıyla okundu'
        buttonOneText='Tamam'
        svg={meterRead}
      />

      <CustomButton textName='Sayaç Oku' onPress={() => changeModalVisible()}/>
    </View>
  );
};
export {BillDetailScreen};
