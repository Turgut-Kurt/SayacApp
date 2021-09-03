import {Text, View, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';
import React,{useState} from 'react';
import {arrow} from '~/assets';
import {colors, CustomButton, CustomCommonHeader,CustomInputLabel} from '~components';
import {goBack} from '~utils';
import styles from './styles';
import { Formik, FieldArray } from 'formik';
import { BillsSettingsValidationScheme } from '~/schema/BillsSettingsValidationScheme';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const BillSettings = () => {
  const [formikInitialValues, setFormikinitialValues] = useState({
    subedel: '',
    atiksubedel: '',
    ctvbedel: '',
    bakimbedel: '',
    subedelikdvorani: '',
    atiksubedelkdvorani: '',
    ctvbedelikdvorani: '',
    bakimbedelikdvorani: '',
    gecfaizorani: '',
    fatodemesuresi: '',
    saydongugunu: '',
  });

  return (
    <Formik
      validationSchema={BillsSettingsValidationScheme}
      initialValues={formikInitialValues}
      //onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
        <View style={styles.Container}>
      <View style={styles.topContainer}>
      <CustomCommonHeader
        backButton={
        <View style={styles.leftContainer}> 
          <TouchableOpacity onPress={() => goBack()}>
            <VectorImage source={arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Fatura Değerleri</Text>
        </View>
        }
        activeBottom={false}
       
            />
            </View>
            <SafeAreaView style={{flex:1}} >
            <ScrollView>
            <CustomInputLabel
                  name={"subedel"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: 'Su bedeli',
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"atiksubedel"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: 'Atık su bedeli',
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"ctvbedel"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: "ÇTV bedeli",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"bakimbedel"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: "Bakım bedeli",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"subedelikdvorani"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: 'Su bedeli kdv orani',
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"atiksubedelkdvorani"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label:"Atık su bedeli KDV oranı",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"ctvbedelikdvorani"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: "ÇTV bedeli KDV oranı",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"bakimbedelikdvorani"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: "Bakım bedeli KDV oranı",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"gecfaizorani"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: 'Gecikme faizi oranı',
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"fatodemesuresi"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: `Fatura ödeme süresi (gün)`,
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
            <CustomInputLabel
                  name={"saydongugunu"}
                  containerProps={{
                    keyboardType: 'numeric',
                    label: "Sayaç döngü günü (gün)",
                    placeholder: '',
                    maxLength: 10,
                  }}
                  succesColor={colors.MainGreen}
                  errorColor={colors.MainRed}
                phone={true}
            />
          <CustomButton
            textName={'Kaydet'}
            onPress={() => {createData(values) ; push(mainStack.home_tab)}}
            buttonStyle={styles.Button}
          />
          </ScrollView>
          </SafeAreaView>
          
        </View>
      )}
          
    </Formik>
    
  );
};
export {BillSettings};
