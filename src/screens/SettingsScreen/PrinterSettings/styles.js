import { calcWidth, calculate, fontSize } from '~utils';
import { colors, fonts, globalStyle } from '~components';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.MainWhite,
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    CustomBack: {
        ...globalStyle.fdr,
        ...globalStyle.aic,
    },
    CustomBackText: {
        paddingLeft: fontSize(16),
        ...fonts.Semibold,
        fontSize: fontSize(14),
    },


});
export default styles;