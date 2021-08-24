import {colors, globalStyle} from '../config';
import {StyleSheet} from 'react-native';
import {calculate, calcWidth, fontSize} from '~utils';
export default StyleSheet.create({
    container: {
        width: '100%',
       
        ...globalStyle.asc,
        padding: 15,
        marginVertical: 10,
        
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.39,
        // shadowRadius: 1,

        // elevation: 4,
    },
    arrow: {
        marginVertical:8
    },
    topDate: {
        flexDirection: 'row',
        ...globalStyle.jcsb,
        ...globalStyle.fdr,
        alignItems: 'center',
        marginVertical:8
    },
    topPerson: {
        flexDirection: 'row',
        ...globalStyle.jcsb,
        ...globalStyle.fdr, 
        alignItems: 'center',
        marginVertical:8
    },
    bottom: {
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:8
        
    },
    svg: {
        width: fontSize(20),
        height: fontSize(20),
        marginHorizontal:5
    },
    svgArrow: {
        width: fontSize(24),
        height: fontSize(24),
        marginHorizontal:5
    },
    date: {
        fontSize: fontSize(18),
        color: colors.MainBlack,
        marginHorizontal:5
    },
    snText: {
        marginLeft: 'auto',
        fontSize: fontSize(18),
    },
    sn: {
        color: colors.MainBlue,
        fontSize: fontSize(18),
        marginHorizontal:5
    },
    person: {
        fontSize: fontSize(18),
        color: colors.MainBlack,
        marginHorizontal:5
    },
    anText: {
        marginLeft: 'auto',
        fontSize: fontSize(18),
    },
    an: {
        color: colors.MainBlue,
        fontSize: fontSize(18),
        marginHorizontal:5
    },
    adress: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal: 5,
        marginVertical:8
    },
    meter: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal: 5,
        marginVertical:8
    },
    statusCard: {
        marginRight: 'auto',
        marginVertical:8
    },
    info: {
        fontSize: fontSize(14),
    },
    time: {
        marginLeft: 'auto',
        color: colors.MainBlue,
        fontSize: fontSize(14),
        marginHorizontal:5
    }
});
