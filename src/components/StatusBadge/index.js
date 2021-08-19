import React from 'react';
import { View , Text } from 'react-native';
import { PropTypes, ViewPropTypes, } from '~/components/config';
import styles from './styles';
import { colors } from '../config';





const StatusBadge = (props) => {
    const { containerStyle, status, quantity, textStyle, } = props;

    const background = {
        backgroundColor: status === "Okunacak" ? colors.MainLightWhite : status === "Tamamlandı" ? colors.MainLightGreen : status === "Ödenecek" ? colors.MainBeige : null
    };

    const textcolor = {
        color: status === "Okunacak" ? colors.MainLightBlue : status === "Tamamlandı" ? colors.MainGreen : status === "Ödenecek" ? colors.MainBrown : null
    };
    
     return (
        <View style={[styles.Container, containerStyle,{...background}]}>
            <Text style={[styles.TextStyle,textStyle ,{...textcolor}]}>{status + "    " + quantity}</Text>
        </View>
    );
};

 StatusBadge.propTypes = {
     containerStyle: ViewPropTypes.style,
     background: ViewPropTypes.style,
     status: PropTypes.string,
     quantity: PropTypes.number,
     textStyle: Text.propTypes.style,
    
 };
StatusBadge.defaultProps = {
    status: "bilinmiyor",
    quantity: 0,
};

export { StatusBadge };