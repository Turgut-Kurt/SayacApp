import React from 'react';
import { View , Text } from 'react-native';
import { PropTypes, ViewPropTypes } from '~/components/config';
import {StatusBadge} from "~/components"
import { home } from '~assets'
import styles from './styles';
import VectorImage from 'react-native-vector-image';
import { colors, globalStyle } from '../config';
import { fontSize } from '~utils';

const data = {
  
  status: "Ödenecek",
  quantity:5,
}

const backgroundColor = {
  backgroundColor: data.status === "Okunacak" ? colors.MainLightWhite : data.status === "Tamamlandı"  ?  colors.MainLightGreen : data.status === "Ödenecek" ? colors.MainBeige : null ,
}

const textStyle = {
  color : data.status === "Okunacak" ? colors.MainLightBlue: data.status === "Tamamlandı"  ?  colors.MainGreen : data.status === "Ödenecek" ? colors.MainBrown : null ,
}




const HouseCard = props => {
    
  const { containerStyle, svgStyle, an, name, meter, address, svg, } = props;


    return (
       
            <View style={[styles.Container, containerStyle, ]} >
              <View style={styles.NameContainer}>
                <View style={{flexDirection:"row",}}>
                  <VectorImage style={[styles.Svg, svgStyle]} source={svg} />
                  <Text style={styles.TextNameStyle}>{name}</Text>
                </View>
                    <View style={styles.AnContainer}>
                        <Text style={styles.AnText}>An:
                        <Text style={styles.AnIdText}>{" " + an}</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.AdressContainer} >
                <Text style={styles.TextMeterStyle}>{meter}</Text>
                <Text style={styles.TextAddressStyle}>{address}</Text>
            </View>
            <View style={styles.badgeContainer}>
                <View style={{paddingHorizontal:fontSize(20)}}>
                    <StatusBadge
                    {...data}
                    background={backgroundColor}
                    textStyle={textStyle}
                />
                </View>
                <View>
                    <StatusBadge
                    {...data}
                    background={backgroundColor}
                    textStyle={textStyle}
                />
                </View>
            </View>
        </View> 
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
 };
 HouseCard.defaultProps = {
     svg: home,
     an: 1234567,
     name: "Ahmet Mehmet",
     meter: 123456789,
     address: "Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12",
     svg: home,
 };

export { HouseCard };