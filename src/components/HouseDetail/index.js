import React from 'react';
import { View, Text } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { home } from '~/assets';
import { PropTypes, ViewPropTypes } from '~/components/config';
import styles from './styles';

const HouseDetail = props => {

    const {
        svg,
        houseName,
        contractNo,
        subsNo,
        tcNo,
        address,
        cntFirstVal,
        totalPay
    } = props;

    return (
        <View style={styles.Container}>
            <View style={styles.CardContainer}>
                <View style={styles.NameNoContainer}>
                    <VectorImage
                        source={svg}
                        style={styles.Svg} />
                    <Text style={[styles.HouseName]}>{houseName}</Text>
                    <Text style={styles.ContractSubsText}>Sn:</Text>
                    <Text style={styles.ContractSubsNo}>{contractNo}</Text>
                </View>
                <View style={styles.TcSubsContainer}>
                    <Text style={styles.tcAddressFirstVal}>{tcNo}</Text>
                    <Text style={styles.SubsText}>An:</Text>
                    <Text style={styles.ContractSubsNo}>{subsNo}</Text>
                </View>
                <Text style={styles.tcAddressFirstVal}>{address}</Text>
                <Text style={styles.tcAddressFirstVal}>{cntFirstVal}</Text>
                <Text style={styles.totalPay}>{totalPay}</Text>
            </View>
        </View>
    );
};

HouseDetail.propTypes = {
    svg: PropTypes.number,
    houseName: PropTypes.string,
    contractNo: PropTypes.string,
    tcNo: PropTypes.string,
    subsNo: PropTypes.string,
    address: PropTypes.string,
    cntFirstVal: PropTypes.string,
    totalPay: PropTypes.string
};

HouseDetail.defaultProps = {
    svg: home,
    houseName: 'Mehmet ÖZKAN',
    contractNo: '0160018',
    tcNo: '12345678912',
    subsNo: '0546618',
    address: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
    cntFirstVal: 'Sayaç başlangıç değeri: 373127',
    totalPay: 'Toplam ödenecek: 55 + 2 (gecikme) = 57 ₺'
};

export { HouseDetail };

//₺ 