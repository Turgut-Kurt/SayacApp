<<<<<<< HEAD
import {FlatList, Text, View,} from 'react-native';

import { CustomButtonWithSvg } from '~components';
import {SearchInput ,HouseCard,StatusBadge} from '~components';
import React from 'react';
import {home_filter} from '~assets';
import { sizes } from '../../components/config/fonts';
import {colors} from '../../components/config/colors'

const data = {
  cards: [{
    name: "Mehmet ÖZKAN",
    an: 1234567,
    meter: 123556,
    address: "Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12",
  },
    {
    name: "Fadime DURAN",
    an: 7654321,
    meter: 587532,
    address: "Aşağı Mah. Ata Cd. Kavuncu Sk.",
  }]
}


const HousesScreen = () => {

  const onSearch = (val) => {
  console.log(val)
}

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={{marginHorizontal:16}}>
        <SearchInput
        onChange={(val) => onSearch(val)}
        />
    </View>
      
      
      <FlatList
        renderItem={({item}) => <HouseCard {...item} />}
        data={data.cards}
        keyExtractor={(item, index) => index.toString()}
      />
           
      
=======
import {
  CustomButton,
  CustomButtonWithSvg,
  CustomInputLabel,
  colors,
} from '~components';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {LoginValidationSchema} from '~schema';
import {home_filter} from '~assets';
const HousesScreen = () => {
  const [formikInitialValues, setFormikinitialValues] = useState({
    email: '',
  });
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Text>HousesScreen</Text>
      <CustomButtonWithSvg />
      <CustomButtonWithSvg />
      <CustomButtonWithSvg svg={home_filter} text={'Filtrele'} />
      <CustomButton />
      <Formik
        validationSchema={LoginValidationSchema}
        initialValues={formikInitialValues}
        onSubmit={values => {
          console.log(values);
        }}>
        {() => (
          <View style={{backgroundColor: colors.MainWhite, paddingTop: 30}}>
            <CustomInputLabel
              name={'email'}
              placeholder={'turgutkurt@gmail.com'}
              label={'E-posta adresi'}
              containerProps={{
                keyboardType: 'email-address',
                maxLength: 40,
              }}
            />
          </View>
        )}
      </Formik>
>>>>>>> main
    </View>
  );
};
export {HousesScreen};
