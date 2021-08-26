import {colors, globalStyle} from '~components';
import {calcWidth, calculate, fontSize} from '~utils';
import { StyleSheet } from 'react-native';
import { sizes,fonts, lineHeights } from '~/components/config/';

const styles = StyleSheet.create({
  Container: {
        flex: 1,
        backgroundColor: colors.MainWhite,
        ...globalStyle.aic,
        ...globalStyle.jcc,
        
    },
    logo: {
        width: fontSize(60),
        height: fontSize(65),
        marginBottom:fontSize(30),
        
    },
  BinaryInput: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jcsb,
    width: calcWidth(92),
    },
    line: {
        width: fontSize(140),
        height: fontSize(1.5),
        backgroundColor: colors.MainGray,
    },
    TextStyle: {
        marginHorizontal: fontSize(10),
        ...fonts.Semibold

    } ,
  inputContainer: {width: calcWidth(43)},
  labelAndError: {width: calcWidth(50)},
    Button: {
        marginTop: fontSize(20),
        borderWidth: 2,
        borderColor:colors.MainBlue
        
    },
    showPassword: {
        position: "absolute",
        right: fontSize(30),
        top: fontSize(30),
        elevation:100,
        
        
        
        
    }
});
export default styles;
