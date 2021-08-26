import {colors, globalStyle} from '../config';
import {StyleSheet} from 'react-native';
import {calculate, calcWidth, fontSize} from '~utils';
export default StyleSheet.create({
    container: {
        width: '100%',
        ...globalStyle.asc,
        padding: 15,
        marginVertical: 10,
    },
    arrow: {
        marginVertical: 8
    },
    topDate: {
        flexDirection: 'row',
        ...globalStyle.jcsb,
        ...globalStyle.fdr,
        alignItems: 'center',
        marginVertical: 8
    },
    topPerson: {
        flexDirection: 'row',
        ...globalStyle.jcsb,
        ...globalStyle.fdr,
        alignItems: 'center',
        marginVertical: 8
    },
    bottom: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
        
    },
    svg: {
        width: fontSize(20),
        height: fontSize(20),
        marginHorizontal: 5
    },
    svgArrow: {
        width: fontSize(24),
        height: fontSize(24),
        marginHorizontal: 5
    },
    date: {
        fontSize: fontSize(18),
        color: colors.MainBlack,
        marginHorizontal: 5
    },
    snText: {
        marginLeft: 'auto',
        fontSize: fontSize(18),
    },
    sn: {
        color: colors.MainBlue,
        fontSize: fontSize(18),
        marginHorizontal: 5
    },
    person: {
        fontSize: fontSize(18),
        color: colors.MainBlack,
        marginHorizontal: 5
    },
    anText: {
        marginLeft: 'auto',
        fontSize: fontSize(18),
    },
    an: {
        color: colors.MainBlue,
        fontSize: fontSize(18),
        marginHorizontal: 5
    },
    adress: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal: 5,
        marginVertical: 8
    },
    meter: {
        fontSize: fontSize(16),
        color: colors.MainDarkGray,
        marginHorizontal: 5,
        marginVertical: 8
    },
    statusCard: {
        marginRight: 'auto',
        marginVertical: 8
    },
    info: {
        fontSize: fontSize(14),
    },
    meterTime: {
        marginLeft: 'auto',
        color: colors.MainBlue,
        fontSize: fontSize(14),
        marginHorizontal: 5
    },
    readMeterButton: {
        backgroundColor: '#2A70FA',
        padding: 10,
        borderRadius: 25,
        marginTop: 200,
        marginHorizontal:30,
        width: "85%",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    modalinside: {
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        alignItems:'center'
    },
    modalText: {
        marginVertical:25,
        fontSize: 18,
        width: '75%',
        textAlign: 'center'
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#2A70FA',
        width: '85%',
        height:40,
        borderRadius: 50,
        marginVertical: 25,
        paddingLeft:10
    },
    save: {
        backgroundColor: '#2A70FA',
        padding: 10,
        borderRadius: 25,
        width: 120,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:20
    },
    cancel: {
        borderColor: '#2A70FA',
        borderWidth:1,
        padding: 10,
        borderRadius: 25,
        width: 120,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:20    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    modalSvg: {
        width: 100,
        height: 100,
        marginVertical: 25
    },
    saved: {
        backgroundColor: '#2A70FA',
        padding: 10,
        borderRadius: 25,
        width: 175,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:20,
    },
    afterReadButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    printerButton: {
        backgroundColor: '#2A70FA',
        padding: 10,
        borderRadius: 25,
        marginTop: 75,
        marginHorizontal: 30,
        marginVertical:10,
        width: "85%",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
});
