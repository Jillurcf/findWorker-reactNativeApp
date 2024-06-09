import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Dimensions
 } from 'react-native'
import React, { useState } from 'react'
import { categories } from './constant';

import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window')



const Categories = () => {
  const navigation = useNavigation();
const [activeCategory, setActiveCategory] = useState(null)
const handleCategoryPress = (category) => {
  setActiveCategory(category.id)
  navigation.navigate(category.screenName)
}
  return (
    <View  style={{paddingTop: height * 0.02 }}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 0
        
      }}
      >
{
    categories.map((category, index) => {
      
        return (
            <View style={{flexDirection: "", alignItems: "center", justifyContent: 'space-between', paddingLeft: 15}} key={index}>
                <TouchableOpacity
                onPress={() => handleCategoryPress(category)}
                >
                    
                    <Image width={100} height={100} style={{alignItems: "center", textAlign: "center"}} source={category.icon}></Image>
                    
                </TouchableOpacity>
                <Text style={{textAlign: "center"}}>
                        {category.title}
                    </Text>
            </View>
        )
    })
}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})