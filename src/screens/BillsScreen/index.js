import { Text, View, FlatList, ScrollView, Modal, Button, StyleSheet } from 'react-native';
import { BillsCard, BillsDetailCard,BillsHeader} from '~components';
import React,{useState} from 'react';

const BillsScreen = () => {
  
  const data = {
  cards: [{
    status: "Tamamlandı",
    an: "1111111",
    name: 'Mehmet Özkan',
    tc: '15555555555',
    date:'Ağustos 2021'
  },
    {
    status: "Okunacak",
    an: "1111111",
    name: 'Fadime Duran',
    tc: '15555555555',
    date:'Temmuz 2021'
      },
    {
    status: "Ödenecek",
    an: "1111111",
    name: 'Halime Duran',
    tc: '15555555555',
    date:'Temmuz 2021'
      }],
  }
  
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
    
      
    </View>
  );
};


export {BillsScreen};
