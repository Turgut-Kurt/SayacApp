import {colors, fonts, globalStyle, sizes} from '../config';
import {StyleSheet} from 'react-native';
import {calcWidth} from '~utils';
export const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  InputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 100,
    ...globalStyle.asc,
    ...globalStyle.inputContainerStyle,
    backgroundColor: colors.MainWhite,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.MainDarkGray,
    width: calcWidth(92),
  },
  Input: {
    paddingLeft: 15,
    borderRadius: 10,
    ...globalStyle.asc,
    ...globalStyle.textInputStyle,
    borderRadius: 100,
    backgroundColor: colors.MainWhite,
    color: colors.Black,
    fontSize: sizes.h6,
  },
  Label: {
    width: calcWidth(84),
    ...globalStyle.asc,
    fontWeight: 'normal',
    color: colors.Black,
    ...fonts.Semibold,
    fontSize: sizes.base,
  },
  Error: {
    width: calcWidth(84),
    ...globalStyle.asc,
    fontSize: sizes.h7,
    ...fonts.Semibold,
    color: colors.MainRed,
    marginBottom: 15,
    marginTop: -5,
  },
});
