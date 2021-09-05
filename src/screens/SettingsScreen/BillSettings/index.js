import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  CustomInputLabel,
  colors,
  fonts,
} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add_house, arrow, delete_house, home_filter, home_logo} from '~assets';
import {fontSize, goBack} from '~utils';

import {AddHouseValidationSchema} from '~schema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {db} from '~request';
import styles from './styles';

const BillSettings = () => {
  let db;
  const [formikInitialValues, setFormikinitialValues] = useState({
    name: '',
    name: '',
    name: '',
    name: '',
    name: '',
    name: '',
    name: '',
    name: '',
    name: '',
  });
  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
        console.log('Database opened:', dbRes);
      })
      .catch(e => console.log(e));
  }, []);
  const createData = values => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO billsettings (name, name, name, name, name, name, name, name, name, name, name, name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          values.name,
          values.name,
          values.name,
          values.name,
          values.name,
          values.name,
          values.name,
          values.name,
          values.name,
        ],
        (tx, result) => {
          console.log('tx', tx);
          console.log('result', result);
        },
      );
    });
  };
  return (
    <KeyboardAwareScrollView style={styles.Avoid}>
      <Formik
        validationSchema={AddHouseValidationSchema}
        initialValues={formikInitialValues}
        //onSubmit={values => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.Container}>
            <CustomCommonHeader
              activeBottom={false}
              backButton={
                <TouchableOpacity
                  onPress={() => goBack()}
                  style={styles.CustomBack}>
                  <VectorImage source={arrow} />
                  <Text style={styles.CustomBackText}>Fatura değerleri</Text>
                </TouchableOpacity>
              }
              svg={home_logo}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Atık su bedeli(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Birim fiyatı(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'ÇTV bedeli(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Bakım bedeli(işleme dahil edilmesin)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Kdv oranı(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Gecikme faizi oranı(%1,6)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label:
                  'Fatura ödeme süresi (gün)(fatura kesim tarihi ile son ödeme tarihi arasındaki fark)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Sayaç döngü günü (her ayın kaçıncı günü)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomButton
              textName={'Güncelle'}
              onPress={() => createData(values)}
              buttonStyle={styles.Button}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
export {BillSettings};
