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
  MeterPaidInfoCard,
  MeterReadInfoCard,
  StatusCard,
} from '~components';
import React, { useEffect, useState } from 'react';
import { arrow, centerfocus, checkGray, home, meterRead } from '~assets';

import { PropTypes } from '~/components/config';
import VectorImage from 'react-native-vector-image';
import {calculateBill} from '~helpers';
import moment from 'moment';
import styles from './styles';

const BillsDetailCard = props => {
  let toplam;
  let gecikme;
  let generalDate = new Date();
  let miliSeconds = generalDate.setHours(generalDate.getHours());
  const monthNames = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  const {
    data,
    an,
    name,
    sn,
    adress,
    date,
    status,
    meter,
    meterTime,
    billsStatus,
    bills,
    meterValue,
    currentTime,
  } = props;
  const calc = () => {
    let gunlukgecikme = bills.gecikmefaiziorani / 30;
    let ms = miliSeconds - data.okundugutarihi;
    let duration = moment.duration(ms, 'milliseconds');
    let days = duration.asDays();
    gecikme = days * gunlukgecikme * data.tutar;
    toplam = gecikme + data.tutar;
  };
  calc();
  return (
    <View style={styles.container}>
      <View style={styles.topDate}>
        <VectorImage style={styles.svg} source={centerfocus} />
        <Text style={styles.date}>{monthNames[data.ay - 1]} 2021</Text>
        <Text style={styles.snText}>Sn:</Text>
        <Text style={styles.sn}>{data.sayacno}</Text>
      </View>
      <View style={styles.topPerson}>
        <VectorImage style={styles.svg} source={home} />
        <Text style={styles.person}>{data.isimsoyisim} </Text>
        <Text style={styles.anText}>An:</Text>
        <Text style={styles.an}>{data.aboneno}</Text>
      </View>

      <Text
        style={
          styles.adress
        }>{`${data.mahalle} ${data.cadde} ${data.sokak}`}</Text>
      <Text style={styles.meter}>
        Sayaç başlangıç değeri: {data.ilksayacdeg}
      </Text>
      <View style={styles.statusCard}>
        <StatusCard status={status} price={data.tutar} />
      </View>

      <View style={styles.bottom}>
        <VectorImage style={styles.svg} source={checkGray} />
        <Text style={styles.info}>Sayaç okuma zamanı geldi</Text>
        <Text style={styles.meterTime}>
          {moment(data.sayacokumatarihi).format('LLL')}
        </Text>
      </View>

      {billsStatus == 'Ödenecek' ? (
        <MeterReadInfoCard
          meterReadTime={data.okundugutarihi}
          meterValue={data.okunandeg}
          amount={Number(toplam.toFixed(2))}
          delayAmount={Number(gecikme.toFixed(2))}
        />
      ) : billsStatus == 'Tamamlandı' ? (
        <View>
          <MeterReadInfoCard
            meterReadTime={data.okundugutarihi}
            meterValue={data.okunandeg}
            delayAmount={Number(gecikme.toFixed(2))}
            amount={Number(toplam.toFixed(2))}
          />
          <MeterPaidInfoCard
            meterReadTime={moment(data.odemetarihi).format('LLL')}
            meterValue={data.okunandeg}
            amount={Number(toplam.toFixed(2))}
          />
        </View>
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
  meterValue: PropTypes.number,
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
  meterValue: 777777,
};

export { BillsDetailCard };
