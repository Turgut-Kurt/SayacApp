import React, {useState} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { home_logo, show_password } from "~/assets";
import  VectorImage from 'react-native-vector-image';
import { colors, CustomInputLabel,CustomButton, globalStyle} from "~/components";
import { Formik } from 'formik';
import { RegisterValidationSchema } from '~schema';
import styles from './styles';
import { fontSize } from "~/utils";




const RegisterScreen = () => {
    const [isSecure , setIsSecure] = useState(true)
    const [formikInitialValues, setFormikinitialValues] = useState({
        name: '',
        surname : '',
        email: '',
        password: '',
    });
   
    return (
        <Formik
            validationSchema={RegisterValidationSchema}
            initialValues={formikInitialValues}
            onSubmit={() => console.log('hello')}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View style={styles.Container}>

                    <VectorImage style={styles.logo} source={home_logo} />
                    <CustomInputLabel
                        name={'name'}
                        containerProps={{
                        label: 'İsim',
                        placeholder: '',
                        maxLength: 25,
                        }}
                        succesColor={colors.MainGreen}
                        errorColor={colors.MainRed}
                    />
                    <CustomInputLabel
                        name={'surname'}
                        containerProps={{
                        label: 'Soyisim',
                        placeholder: '',
                        maxLength: 25,
                        }}
                        succesColor={colors.MainGreen}
                        errorColor={colors.MainRed}
                    />
                    <CustomInputLabel
                        name={'email'}
                        containerProps={{
                            label: 'E-Mail',
                            placeholder: '',
                            maxLength: 25,
                        }}
                        succesColor={colors.MainGreen}
                        errorColor={colors.MainRed}
                    />
                    <View style={{ flexDirection:"row",position:"relative"}}>
                        <CustomInputLabel
                        name={'password'}
                        containerProps={{
                            keyboardType: 'numeric',
                            label: 'Şifre',
                            placeholder: '',
                            maxLength: 25,
                        }}
                            succesColor={colors.MainGreen}
                            errorColor={colors.MainRed}
                            secureTextEntry={isSecure}
                            
                            
                        />

                        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}  style={styles.showPassword}>
                           <VectorImage  source={show_password} />
                        </TouchableOpacity>
                    </View>
                   <CustomButton textName={'Kayıt Ol'} buttonStyle={styles.Button} />
                </View>
            )}
        </Formik>
    );
    
};

export { RegisterScreen };