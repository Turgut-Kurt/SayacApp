import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, Modal, Button, TextInput } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { PropTypes, ViewPropTypes } from '~/components/config';
import styles from './styles';
import { centerfocus, home, checkGray, arrow,meterRead } from '~assets';
import {StatusCard} from './../StatusCard'

const BillsDetailCard = (props) => {
    const {  an, name, sn, adress, date, onPress, status, meter,time, onPressArrow} = props;
    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const modalBackgroundStyle = {  backgroundColor: 'rgba(0, 0, 0, 0.5)'   };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressArrow} style={styles.arrow}>
                <VectorImage style={styles.svgArrow} source={arrow} />
            </TouchableOpacity>
            
            <View style={styles.topDate}>
                <VectorImage style={styles.svg} source={centerfocus} />
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.snText}>Sn:</Text>
                <Text style={styles.sn}>{sn}</Text>
            </View>
            <View style={styles.topPerson}>
                <VectorImage style={styles.svg} source={home} />
                <Text style={styles.person}>{name} </Text>
                <Text style={styles.anText}>An:</Text>
                <Text style={styles.an}>{an}</Text>
            </View>
            
            <Text style={styles.adress}>{adress}</Text>
            <Text style={styles.meter}>Sayaç başlangıç değeri: {meter}</Text>
            <View style={styles.statusCard}>
                <StatusCard status="Okunacak"/>
            </View>
            
            <View style={styles.bottom}>
                <VectorImage style={styles.svg} source={checkGray} />
                <Text style={styles.info}>Sayaç okuma zamanı geldi</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            
            <Pressable style={styles.pressable} onPress={() => setModal(true)}>
                <Text>Sayaç Oku</Text>
            </Pressable>
           

            <View  style={styles.modal} >
                <Modal visible={modal} transparent={true} animationType='slide'>
                    <View style={[styles.modal, modalBackgroundStyle]}>
                        <View style={styles.modalinside}>
                            <Text style={styles.modalText}>Sayaçta Okuduğunuz Değeri Giriniz</Text>
                            <TextInput style={styles.modalInput}/>
                            <View style={styles.modalButtons}>
                                <Pressable style={styles.save} onPress={() => {
                                    setModalSuccess(true);
                                    setModal(false)
                                }}>
                                    <Text>Kaydet</Text>
                                </Pressable>
                                <Pressable style={styles.cancel} onPress={() => setModal(false)}>
                                    <Text>İptal</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
            </View>
            <View  style={styles.modal} >
                <Modal visible={modalSuccess} transparent={true} animationType='slide'>
                    <View style={[styles.modal, modalBackgroundStyle]}>
                        <View style={styles.modalinside}>
                            <VectorImage style={styles.modalSvg} source={meterRead} />
                            <Text style={styles.modalText}>Sayaç Başarıyla Okundu</Text>
                            <Pressable style={styles.saved} onPress={() => setModalSuccess(false)}>
                                <Text>Tamam</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

                       
        </View>
    );
};


BillsDetailCard.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    name: PropTypes.string,
    adress: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    an: PropTypes.number,
    sn: PropTypes.number,
    meter: PropTypes.number,
  
};

BillsDetailCard.defaultProps = {
    onPress: () => console.log('BillsDetailCard basıldı.'),
    onPressArrow: () => console.log('BillsCard basıldı.'),
    status: "Tamamlandı",
    an: 1111111,
    name: 'Mehmet Özkan',
    sn: 1555555,
    date: 'Ağustos 2021',
    adress: "Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12",
    meter: 557865555,
    time:'18 Ağustos 2021, 00.01'
};


export  {BillsDetailCard};




