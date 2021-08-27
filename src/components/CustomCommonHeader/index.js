import React from 'react';
import {View, Text} from 'react-native';
import {colors, ViewPropTypes, PropTypes} from '../config';
import {StatusBadge} from '../StatusBadge';
import styles from './styles';
import {home_logo} from '~assets';
import VectorImage from 'react-native-vector-image';

const CustomCommonHeader = props => {
  const {
    containerStyle,
    topViewStyle,
    leftViewStyle,
    svgStyle,
    svg,
    rightViewStyle,
    backButton,
    leftButton,
    rightButton,
    activeBottom,
    bottomViewStyle,
    data,
  } = props;
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

  return (
    <View style={{...styles.Container, ...containerStyle}}>
      <View style={{...styles.TopView, ...topViewStyle}}>
        <View style={{...styles.LeftView, ...leftViewStyle}}>
          {backButton ? (
            backButton
          ) : (
            <VectorImage style={{...styles.svg, ...svgStyle}} source={svg} />
          )}
        </View>
        <View style={{...styles.RightView, ...rightViewStyle}}>
          {leftButton}
          {rightButton}
        </View>
      </View>
      {activeBottom && (
        <View
          style={{
            ...styles.BottomView,
            ...bottomViewStyle,
          }}>
          {data.map(item => (
            <StatusBadge
              key={item.id}
              {...item}
              active={true}
              background={backgroundColor}
              textStyle={textStyle}
            />
          ))}
        </View>
      )}
    </View>
  );
};
CustomCommonHeader.propTypes = {
  containerStyle: ViewPropTypes.style,
  topViewStyle: ViewPropTypes.style,
  leftViewStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  rightViewStyle: ViewPropTypes.style,
  backButton: PropTypes.element,
  leftButton: PropTypes.element,
  rightButton: PropTypes.element.isRequired,
  bottomViewStyle: ViewPropTypes.style,
  activeBottom: PropTypes.bool,
  data: PropTypes.array,
};
CustomCommonHeader.defaultProps = {
  svg: home_logo,
  activeBottom: true,
  data: [
    {
      id: 1,
      status: '',
      quantity: 1,
    },
  ],
};
export {CustomCommonHeader};
