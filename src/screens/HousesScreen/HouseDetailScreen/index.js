import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseDetail,
  SearchInput,
} from '~components';
import {Text, TouchableOpacity, View} from 'react-native';
import {arrow, delete_house, edit} from '~/assets';
import {fontSize, goBack, navigate} from '~utils';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {homeStack} from '~config';
import styles from './styles';

const HouseDetailScreen = () => {
  return (
    <View style={styles.Container}>
      <CustomCommonHeader
        backButton={
          <TouchableOpacity onPress={() => goBack()}>
            <VectorImage source={arrow} />
          </TouchableOpacity>
        }
        activeBottom={false}
        leftButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => navigate(homeStack.add_house)}
            svg={delete_house}
            text={'Haneyi Sil'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() => navigate(homeStack.add_house)}
            svg={edit}
            text={'Hane Ekle'}
          />
        }
      />
      <HouseDetail />
      <SearchInput
        containerStyle={{width: '90%'}}
        placeholder={'Fatura Arayın'}
      />
    </View>
  );
};
export {HouseDetailScreen};
