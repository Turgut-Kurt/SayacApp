import React, {useState} from 'react';
import { View , Text ,TouchableOpacity } from 'react-native';
import { PropTypes, ViewPropTypes, } from '~/components/config';
import styles from './styles';
import { colors } from '../config';




const MontsButton = (props) => {
     
   

    const { containerStyle, textStyle,name,onPress } = props;

    return (
        <TouchableOpacity
         onPress={onPress}>
            <View style={[styles.Container, containerStyle,]}>
                <Text style={[styles.TextStyle, textStyle]}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

MontsButton.propTypes = {
    onPress: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    background: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    name: PropTypes.string,
    
 };
MontsButton.defaultProps = {
    name: "Monts",
    

};
   

export { MontsButton };