import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import {bill_detail_icon, done_icon, read_icon} from '~assets';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {colors} from '../config';
import styles from './styles';

const HouseBillDetail = props => {
  const {containerStyle, svg, month, year, status, value, svg2, svg3} = props;

  const background = {
    backgroundColor:
      status === 'Okunacak'
        ? colors.MainLightWhite
        : status === 'Tamamlandı'
        ? colors.MainLightGreen
        : status === 'Ödenecek:'
        ? colors.MainBeige
        : null,
  };

  const textcolor = {
    color:
      status === 'Okunacak'
        ? colors.MainLightBlue
        : status === 'Tamamlandı'
        ? colors.MainGreen
        : status === 'Ödenecek:'
        ? colors.MainBrown
        : null,
  };

  const valueText = {
    display:
      status === 'Okunacak' ? 'none' : status === 'Tamamlandı' ? 'none' : null,
  };

  const read_icon = {
    display:
      status === 'Ödenecek:' ? 'none' : status === 'Tamamlandı' ? 'none' : null,
  };

  const done_icon = {
    display:
      status === 'Okunacak' ? 'none' : status === 'Ödenecek:' ? 'none' : null,
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={[styles.Bill, containerStyle, {...background}]}>
        <View style={styles.Time}>
          <VectorImage source={svg} style={styles.Svg} />
          <Text style={styles.TimeText}>{month}</Text>
          <Text style={styles.TimeText}>{year}</Text>
        </View>
        <View style={styles.Time}>
          <Text style={[{...textcolor}, styles.Status]}>{status}</Text>
          <Text style={[{...valueText}, styles.Value]}>{value} ₺</Text>
          <VectorImage style={{...read_icon}} source={svg2} />
          <VectorImage style={{...done_icon}} source={svg3} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

HouseBillDetail.propTypes = {
  containerStyle: ViewPropTypes.style,
  background: ViewPropTypes.style,
  textcolor: ViewPropTypes.style,
  svg: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.string,
  status: PropTypes.string,
  value: PropTypes.string,
  svg2: PropTypes.number,
  svg3: PropTypes.number,
  valueText: ViewPropTypes.style,
  read_icon: ViewPropTypes.style,
  done_icon: ViewPropTypes.style,
};

HouseBillDetail.defaultProps = {
  svg: bill_detail_icon,
  svg2: read_icon,
  svg3: done_icon,
};

export {HouseBillDetail};
