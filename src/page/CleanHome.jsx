import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CleanHome = () => {
    const navigation = useNavigation()
    const handleBackHome = () => {
        navigation.navigate('Home')
    }
  return (
    <View>
      <Text>CleanHome</Text>
      <TouchableOpacity onPress={() => handleBackHome()}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CleanHome

const styles = StyleSheet.create({})