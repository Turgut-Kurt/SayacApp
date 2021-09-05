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
  let db;
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
        'INSERT INTO houses (isimsoyisim, tcno, mahalle, cadde, sokak, sayacno, ilksayacdeg, aboneno, notlar, faturaid, odenenfaturasayisi, faturasayisi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          values.name,
          values.tcno,
          values.neighbourhood,
          values.street,
          values.doornumber,
          values.counternumber,
          values.initialcountervalue,
          values.subscriberno,
          values.notes,
        ],
        (tx, result) => {
          console.log('tx', tx);
          console.log('result', result);
        },
      );
    });
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
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
            <CustomButton
              textName={'Kaydet'}
              onPress={() => createData(values)}
              buttonStyle={styles.Button}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
export {AddHouseScreen};
