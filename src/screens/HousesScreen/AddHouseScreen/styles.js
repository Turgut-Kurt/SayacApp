import {colors, globalStyle} from '~components';
import {calcWidth, calculate, fontSize} from '~utils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.MainWhite,
  },
  BinaryInput: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jcsb,
    width: calcWidth(92),
  },
  inputContainer: {width: calcWidth(43)},
  labelAndError: {width: calcWidth(50)},
  Button: {width: calcWidth(59), marginTop: fontSize(20)},
});
export default styles;
