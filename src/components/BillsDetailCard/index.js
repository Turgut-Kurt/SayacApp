import {
  Button,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CustomButton,
  CustomButtonWithSvg,
  CustomModal,
  MeterReadInfoCard,
  StatusCard,
} from '~components';
import React, {useEffect, useState} from 'react';
import {arrow, centerfocus, checkGray, home, meterRead} from '~assets';

import {PropTypes} from '~/components/config';
import VectorImage from 'react-native-vector-image';
import styles from './styles';

const BillsDetailCard = props => {
  const {
    an,
    name,
    sn,
    adress,
    date,
    status,
    meter,
    meterTime,
    readSuccess,
    meterValue,
    currentTime,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topDate}>
        <VectorImage style={styles.svg} source={centerfocus} />
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.snText}>Sn:</Text>
        <Text style={styles.sn}>{sn}</Text>
      </View>
      <View style={styles.topPerson}>
        <VectorImage style={styles.svg} source={home} />
        <Text style={styles.person}>{name} </Text>
        <Text style={styles.anText}>An:</Text>
        <Text style={styles.an}>{an}</Text>
      </View>

      <Text style={styles.adress}>{adress}</Text>
      <Text style={styles.meter}>Sayaç başlangıç değeri: {meter}</Text>
      <View style={styles.statusCard}>
        <StatusCard status={status} />
      </View>

      <View style={styles.bottom}>
        <VectorImage style={styles.svg} source={checkGray} />
        <Text style={styles.info}>Sayaç okuma zamanı geldi</Text>
        <Text style={styles.meterTime}>{meterTime}</Text>
      </View>

      {readSuccess == true ? (
        <MeterReadInfoCard
          meterReadTime={currentTime}
          meterValue={meterValue}
        />
      ) : null}
    </View>
  );
};
BillsDetailCard.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  name: PropTypes.string,
  adress: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  an: PropTypes.number,
  sn: PropTypes.number,
  meter: PropTypes.number,
  meterValue: PropTypes.string,
};

BillsDetailCard.defaultProps = {
  onPress: () => console.log('BillsDetailCard basıldı.'),
  onPressArrow: () => console.log('BillsCard basıldı.'),
  status: 'Okunacak',
  an: 1111111,
  name: 'Mehmet Özkan',
  sn: 1555555,
  date: 'Ağustos 2021',
  adress: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
  meter: 557865555,
  meterTime: '1 Ağustos 2021, 00.01',
  meterValue: '777777',
};

export {BillsDetailCard};
