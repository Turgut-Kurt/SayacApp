import React,{useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, Modal, Button, TextInput } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { PropTypes, ViewPropTypes } from '~/components/config';
import styles from './styles';
import { centerfocus, home, checkGray, arrow,meterRead } from '~assets';
import { StatusCard } from './../StatusCard';
import { MeterReadInfoCard } from './../MeterReadInfoCard';
import { CustomButtonWithSvg } from '../CustomButtonWithSvg';

const BillsDetailCard = (props) => {
    const {  an, name, sn, adress, date, onPress, status,meter, meterTime, onPressArrow } = props;
    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [meterReadSuccess, setMeterReadSuccess] = useState(false);
    const modalBackgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
    const [statusCardState, setStatusCardState] = useState('Okunacak');
    const [currentTime, setCurrentTime] = useState('');
    const [passMeter, setPassMeter] = useState(null);
    const [meterValue, setMeterValue] = useState(null);
    const setTime = () => {
          var date = new Date().getDate()
          var month = new Date().getMonth()
          var year = new Date().getFullYear()
          var hours = new Date().getHours()
          var min = new Date().getMinutes()
          setCurrentTime( date + '/'+ month + '/'+ year + ',    '+ hours + '.'+ min)
    }
    const setMeter = () => {
        setMeterValue(passMeter);
    }
    
    useEffect(() => {
        setMeterReadSuccess(false);
        setStatusCardState('Okunacak')
        
    }, []);
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
                <StatusCard status={statusCardState} />
            </View>
            
            <View style={styles.bottom}>
                <VectorImage style={styles.svg} source={checkGray} />
                <Text style={styles.info}>Sayaç okuma zamanı geldi</Text>
                <Text style={styles.meterTime}>{meterTime}</Text>
            </View>
            
            {meterReadSuccess == true ? (<MeterReadInfoCard meterReadTime={currentTime} meterValue={ meterValue}/>):(null)}
            {meterReadSuccess == true ? (
                <View>
                    <Pressable style={styles.printerButton} >
                        <Text>Yazdır</Text>
                    </Pressable>
                     <View style={styles.afterReadButtons}>
                        <Pressable style={styles.save} >
                            <Text>Ödeme Al</Text>
                        </Pressable>
                        <Pressable style={styles.cancel} >
                            <Text>Yeniden Oku</Text>
                        </Pressable>
                    </View>
               </View>
            ) : (<Pressable style={styles.readMeterButton} onPress={() => setModal(true)}>
                    <Text>Sayaç Oku</Text>
                </Pressable>)
            }
            
            <CustomButtonWithSvg onPress={() => setModal(true)}/>
            
           

            <View  style={styles.modal} >
                <Modal visible={modal} transparent={true} animationType='slide'>
                    <View style={[styles.modal, modalBackgroundStyle]}>
                        <View style={styles.modalinside}>
                            <Text style={styles.modalText}>Sayaçta Okuduğunuz Değeri Giriniz</Text>
                            <TextInput style={styles.modalInput} onChangeText={(value) => setPassMeter(value)} />
                            <View style={styles.modalButtons}>
                                <Pressable style={styles.save} onPress={() => {
                                    setModal(false);
                                    setModalSuccess(true);
                                    setMeterReadSuccess(true);
                                    setStatusCardState('Ödenecek')
                                    setTime()
                                    setMeter()
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
    meterValue: PropTypes.number,
  
};

BillsDetailCard.defaultProps = {
    onPress: () => console.log('BillsDetailCard basıldı.'),
    onPressArrow: () => console.log('BillsCard basıldı.'),
    status: "Okunacak",
    an: 1111111,
    name: 'Mehmet Özkan',
    sn: 1555555,
    date: 'Ağustos 2021',
    adress: "Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12",
    meter: 557865555,
    meterTime: '1 Ağustos 2021, 00.01',
    meterValue:777777,
};


export  {BillsDetailCard};




