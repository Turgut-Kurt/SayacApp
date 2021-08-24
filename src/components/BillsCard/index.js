import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { colors, globalStyle,sizes,fonts,lineHeights } from '../config';
import {fontSize} from '~utils';
import VectorImage from 'react-native-vector-image';
import { centerfocus, toberead, checkcircle } from '~assets';
import { PropTypes, ViewPropTypes } from '~/components/config';
//import styles from './styles';


const BillsCard = (props) => {
    const { containerStyle, an, name, tc, status, date, onPress, price} = props;

    //const svg = status === "Okunacak" ? toberead : status === "Tamamlandı" ? check_circle : null;

    
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container,{backgroundColor: status === "Okunacak" ? colors.MainLightWhite : status === "Tamamlandı" ? colors.MainLightGreen : status === "Ödenecek" ? colors.MainBeige : null}]}>
            <View style={styles.top}>
                <VectorImage style={styles.svg} source={centerfocus} />
                <Text style={styles.person}>{name} </Text>
                <Text style={styles.anText}>An:</Text>
                <Text style={styles.an}>{an}</Text>
            </View>
            <Text style={styles.tc}>{tc}</Text>
            <View style={styles.bottom}>
                <Text style={styles.date}>{date}</Text>
                <Text style={[styles.status,{color: status === "Okunacak" ? colors.MainLightBlue : status === "Tamamlandı" ? colors.MainGreen : status === "Ödenecek" ? colors.MainBrown : null}]}>{status}: </Text>
                {status === "Okunacak" ? (<VectorImage style={styles.svg} source={toberead} />) : status === "Tamamlandı" ? (<VectorImage style={styles.svg} source={checkcircle} />) : status === "Ödenecek" ? (<Text style={{ color: colors.MainBrown, fontSize: fontSize(20) }} >{price} ₺</Text>):(null) }
            </View>
        </TouchableOpacity>
    );
};


BillsCard.propTypes = {
  onPress: PropTypes.func,
  ContainerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  textStyle: Text.propTypes.style,
  text: PropTypes.string,
};

BillsCard.defaultProps = {
    onPress: () => console.log('BillsCard basıldı.'),
    price:45,
};

const styles = StyleSheet.create({
    container: {
        width: '94%',
        height: '16%',
        borderRadius: fontSize(14),
        ...globalStyle.asc,
        padding: 10,
        flex: 1,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    top: {
        flexDirection: 'row',
        ...globalStyle.jcsb,
        ...globalStyle.fdr,
        paddingBottom: fontSize(8),
        alignItems: 'center'
    },
    bottom: {
        marginTop:5,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    svg: {
        width: fontSize(24),
        height: fontSize(24),
        marginHorizontal:5
    },
    person: {
        fontSize: fontSize(18),
        color: colors.MainBlack,
        marginHorizontal:5
    },
    anText: {
        marginLeft: 'auto',
        fontSize: fontSize(18),
    },
    
    an: {
        color: colors.MainBlue,
        fontSize: fontSize(18),
        marginHorizontal:5
    },
    tc: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal:5
    },
    date: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal:5
    },
    status: {
        marginLeft: 'auto',
        fontSize: fontSize(16),
    }
});


export  {BillsCard};





/*

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
*/