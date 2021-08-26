import React, {useState,useRef} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { home_logo, show_password } from "~/assets";
import  VectorImage from 'react-native-vector-image';
import { colors, CustomInputLabel,CustomButton, globalStyle} from "~/components";
import { Formik } from 'formik';
import { LoginValidationSchema } from '~schema';
import styles from './styles';
import { fontSize } from "~/utils";
import { navigate, replace } from "~/utils/navigation";
import { mainStack } from '~config';







const LoginScreen = () => {
    
    const [isSecure , setIsSecure] = useState(true)
    const [formikInitialValues, setFormikinitialValues] = useState({
        email: '',
        password: '',
    });

    return (
        <Formik
            validationSchema={LoginValidationSchema}
            initialValues={formikInitialValues}
            onSubmit={() => console.log(formikInitialValues)}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View style={styles.Container}>
                    <VectorImage style={styles.logo} source={home_logo} />
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
                        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.showPassword}>
                           <VectorImage  source={show_password} />
                        </TouchableOpacity>
                    </View>
                    <CustomButton onPress={() => replace(mainStack.home_tab)} textName={'Giriş Yap'} buttonStyle={styles.Button} />
                    <View style={{flexDirection:"row",marginTop:fontSize(50),alignItems:"center"}}>
                        <View style={styles.line} /><Text style={styles.TextStyle}> Ya da</Text><View style={styles.line} />
                    </View>
                    <View style={{marginTop:fontSize(40)}}>
                      <Text style={styles.TextStyle}>Hesabınız yok mu?</Text>
                    </View>
                    <CustomButton onPress={() => navigate(mainStack.register)} textName={'Kayıt olun'} buttonStyle={styles.Button} buttonColor={colors.MainWhite} textColor={colors.MainBlack} />
                    
                    

                    
              </View>
            )}
        </Formik>
    );
    
};

export { LoginScreen };