import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import FeaturesRow from '../component/FeaturesRow';
import { Features } from '../component/constant';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get("window")

const HomeScreen = ({}) => {
  const navigation= useNavigation()
  const handleCategory = () => {
    navigation.navigate("CategoryScreen")
  }
  return (
   
   <SafeAreaView style={styles.conntainer} >    
     {/* Main part start */}
    <ScrollView style={{height: height * 0.10}}>
{/* categorties */}

     {/* Features */}
   <View>
    {
      [Features, Features, Features].map((item, index) => {
        return (
          <FeaturesRow
          key={index} 
          title={item.title}
          restuarants={item.restuarants}
          des={item.des}
          />
        )
      })
    }
   </View>
  <View style={{alignItems: "center", paddingVertical: height * 0.025}}>
  <Text>Did not see what you are looking for?</Text>
  <View style={{flexDirection:"row", gap: 5}}>
  <Text>Go to</Text>
  <TouchableOpacity onPress={() => handleCategory()}><Text style={{color: "#0668E3", fontWeight: "bold"}}>Categories</Text></TouchableOpacity>
  </View>
  </View>
    </ScrollView>




   </SafeAreaView>
   
  )
};
// const CarWash = ({navigation, route}) => {
//     return <Text>This is {route.params.name}</Text>
// }

export default HomeScreen;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1
  },
  containerMain: {
flexGrow: 1
  },
  footer: {
   
    position: 'absolute',
    bottom: 0,
    width: '100%',   
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  }
});