import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes, ViewPropTypes } from '~/components/config';
import { centerfocus, checkcircle, toberead } from '~assets';
import { colors, fonts, globalStyle, lineHeights, sizes } from '../config';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {fontSize} from '~utils';

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
