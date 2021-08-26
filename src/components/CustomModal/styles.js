import {calcWidth, calculate} from '~utils';
import {colors, fonts, globalStyle, lineHeights, sizes} from '../config';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
    svg: {
        width: 20,
        height: 20,
        marginHorizontal: 5
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
    
});
export default styles;
