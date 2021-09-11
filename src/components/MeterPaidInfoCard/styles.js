import {colors, globalStyle} from '../config';
import {StyleSheet} from 'react-native';
import { calculate, calcWidth, fontSize } from '~utils';

export default StyleSheet.create({
    container: {
        width: '100%',
        ...globalStyle.asc,

    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
        
    },
    svg: {
        width: fontSize(20),
        height: fontSize(20),
        marginHorizontal: 5
    },
  
    info: {
        fontSize: fontSize(14),
        color: colors.MainBlack,
    },
    meterReadTime: {
        marginLeft: 'auto',
        color: colors.MainBlue,
        fontSize: fontSize(14),
        marginHorizontal: 5
    },
    lines: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginLeft:30
    },
    values: {
        marginLeft: 'auto',
        color: colors.MainBlue,
        fontSize: fontSize(14),
        marginHorizontal: 5
    }
    
});
