import {colors, globalStyle} from '~components';
import {calcWidth, calculate, fontSize} from '~utils';
import { StyleSheet } from 'react-native';
import { sizes,fonts, lineHeights } from '~/components/config/';


const styles = StyleSheet.create({
     Container: {
    flex: 1,
        backgroundColor: colors.MainWhite,
    ...globalStyle.fdc,
        
  },
    topContainer: {
        backgroundColor: colors.MainWhite,
        
    },

    leftContainer: {
       backgroundColor: colors.MainWhite,
        ...globalStyle.fdr,
        width: fontSize(150),
    },
    headerText: {
        marginHorizontal: fontSize(20),
        alignSelf:"center",
        
    },
     
  
  BinaryInput: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jcsb,
    width: calcWidth(92),
  },
  
  labelAndError: {width: calcWidth(50)},
  Button: {width: calcWidth(59), marginVertical: fontSize(20)},
  CustomBack: {
    ...globalStyle.fdr,
    
  },
  CustomBackText: {
    paddingLeft: fontSize(16),
    ...fonts.Semibold,
    fontSize: fontSize(14),
  },

});
export default styles;