import {StyleSheet} from 'react-native';
import {fontSize} from '~utils';
const styles = StyleSheet.create({
  headerWrapper: {
    height: 45,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginBottom: fontSize(20),
  },
});

export default styles;
