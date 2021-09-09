import React, {useState} from 'react';
import { View , Text, FlatList, Animated } from 'react-native';
import { colors, PropTypes, ViewPropTypes, } from '~/components/config';
import { fontSize } from '~/utils';
import { MontsButton } from '../MontsButton';
import styles from './styles';






const bills = [{
      an:1234656,
      month:"Ocak",
      status:"Tamamlandı",
      billsFee: 130,
    },
    {
      an:127856,
      month:"Şubat",
      status:"Ödenecek",
      billsFee: 140,

    },
    {
      an:1265656,
      month:"Mart",
      status:"Ödenecek",
      billsFee: 100,

    },
    {
      an:1232356,
      month:"Mart",
      status:"Tamamlandı",
      billsFee: 100,
    },
    {
      an:181356,
      month:"Mart",
      status:"Okunacak",
      billsFee: 80,
    }
]


const monts = [
    { title : "Tümü", name :"Tümü"},
    { title: 'Ocak', name: 'Ocak' },
    { title: 'Şubat', name: 'Şubat' },
    { title: 'Mart', name: 'Mart' },
    { title: 'Nisan', name: 'Nisan' },
    { title: 'Mayıs', name: 'Mayıs' },
    { title: 'Haziran', name: 'Haziran' },
    { title: 'Temmuz', name: 'Temmuz' },
    { title: 'Agustos', name: 'Agustos' },
    { title: 'Eylül', name: 'Eylül' },
    { title: 'Ekim', name: 'Ekim' },
    { title: 'Kasım', name: 'Kasım' },
    { title: 'Aralık', name: 'Aralık' }
]
    


const MontlyStatusCard = (props) => {

    
    const [isPressed , setIsPressed] = useState()

    const [monthlyStatusData, setMontlyStatusData] = useState([]);
    
    const filterData = (filter) => {
        if (filter === "Tümü")
             setMontlyStatusData(bills);
            
        else {
              setMontlyStatusData(bills.filter(({ month }) => month === filter));
            }
        
    };
    
    


    const TotalBills = Object.keys(bills).length;


// Paid BillsFeeTotal

const paid = monthlyStatusData.filter(({ status }) => status === 'Tamamlandı');

const paidBills = Object.keys(paid).length;

const paidPercent = (paidBills / TotalBills) * 100;

const paidBillsFeeTotal = monthlyStatusData.reduce((prev, cur) => prev + cur.billsFee, 0);

// Unpaid BillsFeeTotal

const unpaid = monthlyStatusData.filter(({ status }) => status === 'Ödenecek');

const unpaidBills = Object.keys(unpaid).length;

const unpaidPercent = (unpaidBills / TotalBills) * 100;

const unpaidBillsFeeTotal = monthlyStatusData.reduce((prev, cur) => prev + cur.billsFee, 0);

// number of meter to be read

const unread = monthlyStatusData.filter(({ status }) => status === 'Okunacak');

const unreadBills = Object.keys(unread).length;

const unreadPercent = (unreadBills / TotalBills) * 100;


    
     const { containerStyle , textStyle, } = props;
    
    
    return (
        <View >
            <View style={{
                flexDirection: "row", marginLeft:fontSize(15)}}>
                <FlatList
                    renderItem={({ item , index  }) => <MontsButton
                    {...item}
                        onPress={() => { filterData(item.name); setIsPressed(index); }}
                        containerStyle={index === isPressed && styles.ButtonActive}
                        textStyle={index === isPressed && styles.TextStyleActive}
                    />}
                    data={monts}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                 />
             </View>
            <View style={[styles.Container, containerStyle]}>
             <View>
                <Text style={[styles.TextStyle, textStyle]}>Fatura sayısı       :  {TotalBills}</Text>
                <View style={styles.Status}>
                    <Text style={[styles.TextStyle, textStyle, { color: colors.MainDarkGray }]}>Okunacak            :   {unreadBills}/{TotalBills} </Text>
                    <View style={{height:fontSize(12), width:fontSize(unreadPercent),backgroundColor : colors.MainDarkGray, borderRadius:fontSize(5)}}></View>
                    <Text >{unreadPercent} %</Text>
                </View>
                <View style={styles.Status}>
                    <Text style={[styles.TextStyle, textStyle, { color: colors.MainRed,}]}>Ödenecek            :   {unpaidBills}/{TotalBills} </Text>
                    <View style={{height:fontSize(12), width:fontSize(unpaidPercent),backgroundColor : colors.MainBeige, borderRadius:fontSize(5) }}></View>
                    <Text  >{unpaidPercent} %</Text>
                </View> 
                <View style={styles.Status}>
                    <Text style={[styles.TextStyle, textStyle, { color: colors.MainGreen }]}>Tamamlandı        :   {paidBills}/{TotalBills} </Text>
                    <View style={{height:fontSize(12), width:fontSize(paidPercent),backgroundColor : colors.MainLightGreen, borderRadius:fontSize(5)}}></View>
                    <Text >{paidPercent} %</Text>
                </View> 
            </View>
            <View style={{paddingVertical:fontSize(30)}}>
                <Text style={[styles.TextStyle, textStyle]}>Ödenen miktar                                  :   {paidBillsFeeTotal} ₺</Text>
                <Text style={[styles.TextStyle, textStyle]}>Ödenen gecikme miktarı                 :</Text>
                <Text style={[styles.TextStyle, textStyle,{color: colors.MainBlue} ]}>Ödenen genel toplam                      :</Text>
            </View>
            <View>
                <Text style={[styles.TextStyle, textStyle]}>Kalan miktar                                      :    {unpaidBillsFeeTotal} ₺</Text>
                <Text style={[styles.TextStyle, textStyle]}>Kalan gecikme miktarı                     :</Text>
                <Text style={[styles.TextStyle, textStyle,{color: colors.MainBlue} ]}>Kalan genel toplam                          :</Text>
                </View>
            </View>    
        </View>
    );
};

 MontlyStatusCard.propTypes = {
     containerStyle: ViewPropTypes.style,
     textStyle: Text.propTypes.style,
    
 };
MontlyStatusCard.defaultProps = {
    
};

export { MontlyStatusCard };