import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../component/constant';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../component/common/footer/Footer';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get("window")


const CategoryScreen = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState(null);
  const handleCategory = (category) => {
    setCategory(category.id)
    navigation.navigate(category.screenName)
  }
  return (
    <SafeAreaView style={styles.container}>
     
     <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle= {
      {paddingLeft: 0}
     }
     >
      <Text style={styles.titleText}>Categories</Text>
     <View style={styles.grid} >
     {
        categories.map((category, index) => {
          return (
            <View style={styles.gridItem} key={index}>
              <TouchableOpacity onPress={() => handleCategory(category)} >
                <Image  source={category.icon} width={100} height={100} />
              </TouchableOpacity>
            </View>
          )
        })
      }
     </View>
     </ScrollView>
     <Footer />
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  paddingLeft: 5
    
  },
  titleText: {
color: "#0668E3",
fontWeight: "bold",
fontSize: width * 0.05,
textAlign: "center",
marginTop: width * 0.05

  },
  scrollView: {
    paddingHorizontal: width * 0.05,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    
  },
  gridItem: {
    width: width * 0.3,
    height: height * 0.09,
    paddingVertical: height * 0.06,
    alignItems: "center",
  }
})