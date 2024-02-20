import { Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
  
  <Drawer.Navigator screenOptions={{
          headerStyle:{ backgroundColor:'#351401' },
          headerTintColor:'#fff',
          sceneContainerStyle:{backgroundColor:'#3f2f25' },
          drawerContentStyle:{backgroundColor:'#351401'},
          drawerInactiveTintColor:'white',
          drawerActiveTintColor:'#351401',
          drawerActiveBackgroundColor:'#e4baa1',
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title:'All Categories',
      drawerIcon:({color,size}) => <Ionicons name='list' color={color} size={size}/>
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen}
    options={{
      drawerIcon:({color,size}) => <Ionicons name='star' color={color} size={size}/>
    }}
    />
  </Drawer.Navigator>
  
  ); 
}


export default function App() {
  return (
    <>
    <StatusBar style='light'/>

    {/* <FavoritesContextProvider> */}
    <Provider store ={store}> 

        <NavigationContainer>
          <Stack.Navigator 
          initialRouteName={'MealsCategories'} 

          screenOptions={{
            headerStyle:{ backgroundColor:'#351401' },
            headerTintColor:'#fff',
            contentStyle:{backgroundColor:'#3f2f25' },
          }}>
            
            
            <Stack.Screen  
            name = 'Drawer'
            component={DrawerNavigator}
            options={{
                // title:'All Categories',
                headerShown: false
                }} 
            />

            
            
            
            <Stack.Screen  name = 'MealsOverview' component={MealsOverviewScreen} 
            //so that one way of setting options dynamically an taking 
            //  route specific screen specific data in account
            //
            //  options={({route,navigation}) => { 
            //     const catId = route.params.categoryID;
            //     return {
            //       title:catId,
            //     };
            //     }}
          />



            <Stack.Screen  name = 'MealDetails' component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap Me' onPress={{}}/>
            //   },
            // }}
            options={{
              title:'About the Meal'
            }}
            
            
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>

        {/* </FavoritesContextProvider> */}


   </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
