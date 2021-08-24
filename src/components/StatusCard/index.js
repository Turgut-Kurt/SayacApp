import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import { colors, globalStyle,sizes,fonts,lineHeights } from '../config';
import {fontSize} from '~utils';
import React from 'react';
import VectorImage from 'react-native-vector-image';
import {toberead,checkcircle} from '~assets';
import styles from './styles';

const StatusCard = props => {
  const { onPress, status, number } = props;
  const vectorimage = () => {
    return (
      status === "Okunacak" ? (<VectorImage style={styles.svg} source={toberead} />) : status === "Tamamlandı" ? (<VectorImage style={styles.svg} source={checkcircle} />) : status === "Ödenecek" ? (<Text style={{ color: colors.MainBrown, fontSize: fontSize(20) }} >{price} ₺</Text>):(null) 
    )
  }
  const shownumber = () => { return (<Text>{number}</Text>) }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: status === "Okunacak" ? colors.MainLightWhite : status === "Tamamlandı" ? colors.MainLightGreen : status === "Ödenecek" ? colors.MainBeige : null }]}>
      <Text style={[styles.text,{color: status === "Okunacak" ? colors.MainLightBlue : status === "Tamamlandı" ? colors.MainGreen : status === "Ödenecek" ? colors.MainBrown : null}]}>{status}</Text>
      {number === null ? vectorimage() : shownumber() }
      
    </TouchableOpacity>
  );
};

StatusCard.propTypes = {
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  textStyle: Text.propTypes.style,
  text: PropTypes.string,
};
StatusCard.defaultProps = {
  onPress: () => console.log('StatusCard basıldı.'),
  //status: 'Tamamlandı',
  number: null,
};
export {StatusCard};
