import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, globalStyle} from '../config';

import React from 'react';
import {StatusBadge} from '~/components';
import VectorImage from 'react-native-vector-image';
import {fontSize} from '~utils';
import {home} from '~assets';
import styles from './styles';

const data = {
  status: 'Ödenecek',
  quantity: 5,
};

const data1 = {
  status: 'Okunacak',
  quantity: 2,
};

const backgroundColor = {
  backgroundColor:
    data.status === 'Okunacak'
      ? colors.MainLightWhite
      : data.status === 'Tamamlandı'
      ? colors.MainLightGreen
      : data.status === 'Ödenecek'
      ? colors.MainBeige
      : null,
};

const textStyle = {
  color:
    data.status === 'Okunacak'
      ? colors.MainLightBlue
      : data.status === 'Tamamlandı'
      ? colors.MainGreen
      : data.status === 'Ödenecek'
      ? colors.MainBrown
      : null,
};

const HouseCard = props => {
  const {
    data,
    containerStyle,
    svgStyle,
    aboneno,
    isimsoyisim,
    mahalle,
    cadde,
    sokak,
    tcno,
    svg,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.Container, containerStyle]}>
        <View style={styles.NameContainer}>
          <View style={{flexDirection: 'row'}}>
            <VectorImage style={[styles.Svg, svgStyle]} source={svg} />
            <Text style={styles.TextNameStyle}>{isimsoyisim}</Text>
          </View>
          <View style={styles.AnContainer}>
            <Text style={styles.AnText}>
              An:
              <Text style={styles.AnIdText}>{' ' + aboneno}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.AdressContainer}>
          <Text style={styles.TextMeterStyle}>{tcno}</Text>
          <Text style={styles.TextAddressStyle}>
            {`${mahalle} ${cadde} ${sokak}`}
          </Text>
        </View>
        <View style={styles.badgeContainer}>
          <View style={{paddingHorizontal: fontSize(20)}}>
            <StatusBadge
              {...data}
              background={backgroundColor}
              textStyle={textStyle}
            />
          </View>
          <View>
            <StatusBadge
              {...data1}
              background={backgroundColor}
              textStyle={textStyle}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

HouseCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  an: PropTypes.number,
  name: PropTypes.string,
  meter: PropTypes.number,
  address: PropTypes.string,
  svg: PropTypes.number,
  onPress: PropTypes.func,
};
HouseCard.defaultProps = {
  svg: home,
  an: 1234567,
  name: 'Ahmet Mehmet',
  meter: 123456789,
  address: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
  svg: home,
  onPress: () => console.log('Hanedetay basıldı.'),
};

export {HouseCard};
