import { View ,Text,FlatList, StyleSheet} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// import {useRoute} from '@react-navigation/native';

// we know that we get because this screen and it gets all navigation prop
// from react naviatoin
function MealsOverviewScreen({ route ,navigation }){
    const catId = route.params.categoryID;
    // const route = useRoute();
    // route.params.categoryID

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });



    useLayoutEffect(()=>{

    const categoryTitle = CATEGORIES.find((Category) => Category.id === catId).title
    navigation.setOptions({
        title:categoryTitle,
    });

    },[catId,navigation]);


    return <MealsList items={displayedMeals}/>
    


}



export default MealsOverviewScreen;


