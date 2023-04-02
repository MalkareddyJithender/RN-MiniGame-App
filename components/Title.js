import {Text,StyleSheet,Dimensions,useWindowDimensions} from 'react-native';
import Colors from '../constants/colors';

function Title({children}){
    const {width} = useWindowDimensions();
    const fontSize = width < 380 ? 22 : 24;

    return <Text style={[styles.title,{fontSize}]}>{children}</Text>
}

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    title:{
        // fontSize: deviceWidth < 380 ? 22 : 24,
        color:Colors.white,
        borderWidth:2,
        borderColor:Colors.white,
        padding:12,
        textAlign:'center',
        fontFamily:'open-sans-bold',
        width:300,
        maxWidth:'80%'
    }
})