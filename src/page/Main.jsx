import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import CarWash from './CarWash'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IconComponent from '../component/common/header/IconComponent'
import Categories from '../component/Categories'
import Footer from '../component/common/footer/Footer'
const Tab = createBottomTabNavigator()
const Main = () => {
  return (
    <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
     <View style={styles.header}>
  {/* Header part start */}
  <IconComponent></IconComponent>
    <Categories></Categories>
     </View>
     <View style={styles.content}>
<Tab.Navigator>
    <Tab.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    <Tab.Screen options={{headerShown: false}} name="CarWash" component={CarWash} />
    
</Tab.Navigator>

     </View>
     <View style={styles.footer} >
     <View style={styles.footer} >
<Footer />
</View>
     </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    header: {
    //   height: 50,
    //   backgroundColor: '#f8f8f8',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
    },
    footer: {
    }
  });