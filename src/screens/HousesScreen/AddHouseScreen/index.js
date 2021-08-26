import {View} from 'react-native';
import React, {useState} from 'react';
import {colors, CustomButton, CustomInputLabel, Header} from '~components';
import {Formik} from 'formik';
import {AddHouseValidationSchema} from '~schema';
import styles from './styles';
styles;
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
          <Header />
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
