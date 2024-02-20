
import { View,Text,Image,StyleSheet,FlatList } from "react-native";

import MealItem from "./MealItem";

function MealsList({items}){
    
    function renderMealItem(itemData){
        const item = itemData.item;
        //this custom prob distribute all the properties to component
        const mealItemProps = {
            id:item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration

        }

        //for passing complete set of props we use pre three dots ...
        return <MealItem
        {...mealItemProps}
    
         />
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            />
            
        </View>
    );
}
export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
  });