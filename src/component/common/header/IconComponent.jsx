import { Button, Dimensions, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react';

import { Bell, Search} from "react-native-feather";
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window')

const IconComponent = () => {
  const navigation = useNavigation(); 
  
  const handleSearch = () => { 
    navigation.navigate('searchScreen')
  }
  return (
    <View>
     <Text style={styles.iconContainer}>
  
    
     <Search onPress={() => handleSearch()} stroke="#333333" fill="#ffff" width={32} height={32}></Search>
     <Bell stroke="#333333" fill="#ffff" width={32} height={32} />

     </Text>
  
    </View>
  )
}

export default IconComponent

const styles = StyleSheet.create({
  iconContainer: {
    textAlign: 'right',
    paddingHorizontal: width * 0.02,
    marginTop: width * 0.05,
    flexDirection: 'row',
   
  }
})