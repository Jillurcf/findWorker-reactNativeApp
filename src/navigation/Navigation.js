import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../page/HomeScreen';
// import CarWash from '../page/CarWash';
// import Categories from '../component/Categories';
// import CleanHome from '../page/CleanHome';
import Main from '../page/Main';
import CategoryScreen from '../page/CategoryScreen';
import SearchScreen from '../page/User/SearchScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={{
        headerShown: false
    }}>  
      <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown: false}} />
      <Stack.Screen name="searchScreen" component={SearchScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}