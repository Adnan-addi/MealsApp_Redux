
import { View,Text,Image,StyleSheet ,Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';

function IconButton({icon,color,onPress}){
    return(
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.container}>
                <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
}
export default IconButton;

const styles = StyleSheet.create({
    container: {
        opacity:0.7
    },
  });