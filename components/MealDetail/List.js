
import { View,Text,Image,StyleSheet } from "react-native";

function List({data}){
    return( 
        data.map((dataPoint) =>(

            <View
            style={styles.container}
            key={dataPoint}>
                <Text style={styles.ItemText}>{dataPoint}</Text>
            </View>
        ))
    );
}
export default List;

const styles = StyleSheet.create({
    container: {
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497',
    },

    ItemText:{
        color:"#351401",
        textAlign:'center'
    }
  });