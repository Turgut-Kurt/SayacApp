import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {CustomButton, HouseDetail, CustomButtonWithSvg, SearchInput} from '~components';
import {navigate, goBack, fontSize} from '~utils';
import {homeStack} from '~config';
import VectorImage from 'react-native-vector-image';
import { arrow, delete1,edit } from '~/assets';
import styles from './styles';


const HouseDetailScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => goBack()}>
             <VectorImage style={{marginLeft:fontSize(10)}} source={arrow} />
          </TouchableOpacity>
        </View>
          
        <View style={{alignSelf:"flex-end",flexDirection:"row",paddingHorizontal:fontSize(10),}}>
          <View style={{paddingRight:fontSize(10),}}>
            <CustomButtonWithSvg svg={delete1} text={"Haneyi Sil"} /> 
          </View>
          <CustomButtonWithSvg onPress={() => navigate(homeStack.update_house)} svg={edit} text={"Düzenle"} />
        </View>
      </View>
      <HouseDetail />
      <SearchInput
      containerStyle={{width: "90%"}}
      placeholder={"Fatura Arayın"}
      />
      
      
    </View>
  );
};
export {HouseDetailScreen};
