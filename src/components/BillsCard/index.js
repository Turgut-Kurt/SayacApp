import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes, ViewPropTypes } from '~/components/config';
import { centerfocus, checkcircle, toberead } from '~assets';
import { colors, fonts, globalStyle, lineHeights, sizes } from '../config';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import { centerfocus, toberead, checkcircle } from '~assets';
import { PropTypes, ViewPropTypes } from '~/components/config';
import styles from './styles';
import { navigate } from '~utils';
import { billStack } from '~config';
import { fontSize } from '~utils';

//import styles from './styles';


const BillsCard = (props) => {
    const { containerStyle, an, name, tc, status, date, price } = props;

    //const svg = status === "Okunacak" ? toberead : status === "Tamamlandı" ? check_circle : null;

    return (
        <TouchableOpacity
            onPress={() => navigate(billStack.bill_detail, { ...props })}
            style={[styles.container, { backgroundColor: status === "Okunacak" ? colors.MainLightWhite : status === "Tamamlandı" ? colors.MainLightGreen : status === "Ödenecek" ? colors.MainBeige : null }]}>
            <View style={styles.top}>
                <VectorImage style={styles.svg} source={centerfocus} />
                <Text style={styles.person}>{name} </Text>
                <Text style={styles.anText}>An:</Text>
                <Text style={styles.an}>{an}</Text>
            </View>
            <Text style={styles.tc}>{tc}</Text>
            <View style={styles.bottom}>
                <Text style={styles.date}>{date}</Text>
                <Text style={[styles.status, { color: status === "Okunacak" ? colors.MainLightBlue : status === "Tamamlandı" ? colors.MainGreen : status === "Ödenecek" ? colors.MainBrown : null }]}>{status}: </Text>
                {status === "Okunacak" ? (<VectorImage style={styles.svg} source={toberead} />) : status === "Tamamlandı" ? (<VectorImage style={styles.svg} source={checkcircle} />) : status === "Ödenecek" ? (<Text style={{ color: colors.MainBrown, fontSize: fontSize(20) }} >{price} ₺</Text>) : (null)}
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
    //onPress: () => console.log('BillsCard basıldı.'),
    price: 45,
};


export { BillsCard };

