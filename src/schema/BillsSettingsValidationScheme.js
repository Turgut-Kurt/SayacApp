import * as yup from 'yup';
const BillsSettingsValidationScheme = yup.object().shape({
  subedel: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Su bedeli zorunlu'),
  atiksubedel: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Atık su bedeli zorunlu'),
  ctvbedel: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('ÇTV bedeli zorunlu'),
  bakimbedel: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Bakım bedeli zorunlu'),
  subedelikdvorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Su bedeli kdv oranı zorunlu'),
  atiksubedelkdvorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Atık su bedeli kdv oranı zorunlu'),
  ctvbedelikdvorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('ÇTV bedeli kdv oranı zorunlu'),
  bakimbedelikdvorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Bakim bedeli kdv oranı zorunlu'),
  gecfaizorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Gecikme faizi oranı zorunlu'),
  fatodemesuresi: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Fatura ödeme süresi (gün) zorunlu'),
  saydongugunu: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Sayaç döngü günü (her ayın kaçıncı günü) zorunlu'),
});

export {BillsSettingsValidationScheme};
