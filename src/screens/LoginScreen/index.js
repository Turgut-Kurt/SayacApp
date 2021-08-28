import React, {useState} from "react";
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
import { connect } from "react-redux";
import { SignIn } from "~/store/Actions/Auth/SignIn";



const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
    SignIn: (values) => dispatch(SignIn(values)),
});







const LoginScreen = connect(mapStateToProps, mapDispatchToProps)((props) => {

    const { user } = props;
    
    
    
    const [isSecure , setIsSecure] = useState(true)
    const [formikInitialValues, setFormikinitialValues] = useState({
        email: '',
        password: '',
        
    });

    return (
        <Formik
            validationSchema={LoginValidationSchema}
            initialValues={formikInitialValues}
            onSubmit={(values) => props.SignIn(values)}>
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
                    <CustomButton  onPress={handleSubmit} textName={'Giriş Yap'} buttonStyle={styles.Button} />
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
    
});

export { LoginScreen };