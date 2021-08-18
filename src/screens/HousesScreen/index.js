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
    </View>
  );
};
export {HousesScreen};
