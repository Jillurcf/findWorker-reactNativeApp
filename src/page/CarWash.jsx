import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CarWash = () => {
  const navigation = useNavigation()
  const handleBackHome = () => {
    navigation.navigate("Home")
  }
  return (
    <View>
      <Text>CarWash</Text>
      <TouchableOpacity 
      onPress={() => handleBackHome()}
      >
       <Text> Back to home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CarWash

const styles = StyleSheet.create({})