import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  CustomInputLabel,
  colors,
  fonts,
} from '~components';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add_house, arrow, delete_house, home_filter, home_logo} from '~assets';
import {fontSize, goBack} from '~utils';

import {AddHouseValidationSchema} from '~schema';
import {Formik} from 'formik';
import VectorImage from 'react-native-vector-image';
import styles from './styles';

const data = [
  {
    id: 1,
    status: 'Okunacak',
    quantity: 1,
  },
  ,
  {
    id: 2,
    status: 'Ödenecek',
    quantity: 2,
  },
  ,
  {
    id: 3,
    status: 'Tamamlandı',
    quantity: 7,
  },
];
const AddHouseScreen = () => {
  const [formikInitialValues, setFormikinitialValues] = useState({
    name: '',
    tcno: '',
    neighbourhood: '',
    street: '',
    doornumber: '',
    counternumber: '',
    initialcountervalue: '',
    subscriberno: '',
    notes: '',
  });

  return (
    <Formik
      validationSchema={AddHouseValidationSchema}
      initialValues={formikInitialValues}
      onSubmit={() => console.log('hello')}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.Container}>
          <CustomCommonHeader
            data={data}
            activeBottom={false}
            backButton={
              <TouchableOpacity
                onPress={() => goBack()}
                style={styles.CustomBack}>
                <VectorImage source={arrow} />
                <Text style={styles.CustomBackText}>Hane Ekle</Text>
              </TouchableOpacity>
            }
            svg={home_logo}
          />
          <CustomInputLabel
            name={'name'}
            containerProps={{
              label: 'Ad soyad',
              placeholder: '',
              maxLength: 25,
            }}
            succesColor={colors.MainGreen}
            errorColor={colors.MainRed}
          />
          <CustomInputLabel
            name={'tcno'}
            containerProps={{
              keyboardType: 'numeric',
              label: 'TC kimlik no',
              placeholder: '',
              maxLength: 11,
            }}
            succesColor={colors.MainGreen}
            errorColor={colors.MainRed}
            phone={true}
          />
          <View style={styles.BinaryInput}>
            <CustomInputLabel
              name={'neighbourhood'}
              containerProps={{
                label: 'Mahalle',
                placeholder: '',
                maxLength: 15,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
            />
            <CustomInputLabel
              name={'street'}
              containerProps={{
                label: 'Cadde',
                placeholder: '',
                maxLength: 15,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
            />
          </View>
          <View style={styles.BinaryInput}>
            <CustomInputLabel
              name={'doornumber'}
              containerProps={{
                label: 'Sokak/kapı no',
                placeholder: '',
                maxLength: 15,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
            />
            <CustomInputLabel
              name={'counternumber'}
              containerProps={{
                keyboardType: 'numeric',
                label: 'Sayaç no',
                placeholder: '',
                maxLength: 10,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
              phone={true}
            />
          </View>
          <View style={styles.BinaryInput}>
            <CustomInputLabel
              name={'initialcountervalue'}
              containerProps={{
                keyboardType: 'numeric',
                label: 'İlk sayaç değeri',
                placeholder: '',
                maxLength: 10,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
              phone={true}
            />
            <CustomInputLabel
              name={'subscriberno'}
              containerProps={{
                keyboardType: 'numeric',
                label: 'Abone no',
                placeholder: '',
                maxLength: 10,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              inputContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer}
              labelStyle={styles.labelAndError}
              errorStyle={styles.labelAndError}
              phone={true}
            />
          </View>
          <CustomInputLabel
            name={'notes'}
            containerProps={{
              keyboardType: 'numeric',
              label: 'Notlar',
              placeholder: '',
              maxLength: 25,
            }}
            succesColor={colors.MainGreen}
            errorColor={colors.MainRed}
          />
          <CustomButton textName={'Kaydet'} buttonStyle={styles.Button} />
        </View>
      )}
    </Formik>
  );
};
export {AddHouseScreen};
