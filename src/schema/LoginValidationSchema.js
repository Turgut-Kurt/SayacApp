import * as yup from 'yup';
const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email.')
    .max(40, ({max}) => `must be a maximum of ${max} characters.`)
    .required('Email required'),
  password: yup
    .string()
    .min(6, ({min}) => `must be a minimum of ${min} characters.`)
    .max(25, ({max}) => `must be a maximum of ${max} characters.`)
    .required('Password required'),
});

export {LoginValidationSchema};
