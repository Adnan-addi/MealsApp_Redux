import { View,Text,StyleSheet, Pressable ,Image , Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";


function MealItem({id,title ,imageUrl ,duration ,complexity, affordability}){
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetails',{
            mealId: id,
    
        });
    }



  
    
    
    return(
        <View style={styles.mealItem}>

            <Pressable  android_ripple={{color:'#ccc'}} 
            style={({pressed})=>( pressed ? styles.buttonPressed : null )}
            onPress={selectMealItemHandler}
                >
                    <View style={styles.innerContainer}>
                        <View>
                            <Image style={styles.imageStyle} source = {{ uri: imageUrl }}/>
                            <Text style={styles.title}>{title}</Text>    
                        </View>
                        <MealDetails duration={duration}
                        affordability={affordability}
                        complexity={complexity}/>
                      
                    </View>
            </Pressable>
        </View>
    );
}

export default MealItem;



const styles = StyleSheet.create({

    container: {
    },


innerContainer: {
    borderRadius:8,
    overflow:'hidden',
    },


    mealItem:{
        margin:16,
        borderRadius:8,
        
        backgroundColor:'#fff',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.35,
        shadowOffset:{width:0 ,height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow:  Platform.OS === 'android' ? 'hidden' : 'visible'
    },




    imageStyle:{
        width:'100%',
        height:200,

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8

    },
   
    buttonPressed:{
        opacity:0.5
    },
    



  });