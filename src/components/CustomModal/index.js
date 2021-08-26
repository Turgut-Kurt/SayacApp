import {PropTypes} from '~/components/config';
import {Text, Modal, Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { meterRead } from '~assets';
import VectorImage from 'react-native-vector-image';


const CustomModal = props => {
  const {
    buttonNumber,
    inputNumber,
    buttonOneText,
    onPress,
    buttonTwoText,
    svg,
    modalText,
    visibleValue,
    closeFunc,
  } = props;

  

  const modalBackgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderWidth:2 };
  return (
    <>
      <View  style={styles.modal} >
                <Modal visible={visibleValue} transparent={true} animationType='slide' style={{borderWidth:2}} >
                    <View style={[styles.modal, modalBackgroundStyle]} >
                        <View style={styles.modalinside}>
                            <VectorImage style={styles.modalSvg} source={meterRead} />
                            <Text style={styles.modalText}>Sayaç Başarıyla Okundu</Text>
                            <Pressable style={styles.saved} onPress={() => closeFunc()}>
                                <Text>Tamam</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
    </>
  );
};
CustomModal.propTypes = {
  visibleValue: PropTypes.bool,
  // buttonStyle: ViewPropTypes.style,
  // buttonColor: ViewPropTypes.style,
  // onPress: PropTypes.func,
  // textStyle: Text.propTypes.style,
  // textColor: Text.propTypes.style,
  modalText: PropTypes.string,
  buttonNumber: PropTypes.number,
  buttonOneText: PropTypes.string,
  buttonTwoText: PropTypes.string,
  inputNumber: PropTypes.number,
  buttonNumber: PropTypes.number,
};
CustomModal.defaultProps = {
  // buttonColor: colors.MainBlue,
  // buttonType: false,
  // onPress=() => setModalVisible(true)
  // disabled: false,
  // textColor: colors.MainWhite,
  // textName: 'CustomButton',
};
export {CustomModal};
