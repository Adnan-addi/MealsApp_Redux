
import { View,Text,Image,StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
// import  {FavoritesContext}  from '../store/context/favorites-context';
import { useSelector } from "react-redux";


function FavoritesScreen(){

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    
    // const favoriteMealContext = useContext(FavoritesContext);
    
    const favoriteMeals = MEALS.filter(meals => favoriteMealIds.includes(meals.id));
    console.log(favoriteMeals);

    if(favoriteMeals.length === 0){
        return<View style={styles.container}>
            <Text style={styles.text}>You have no Favorite meals yet...</Text>
        </View>
    }

    return(
        <MealsList items={favoriteMeals}/>
    );
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
  });