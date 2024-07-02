import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window')
const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={{paddingHorizontal: width * 0.05, marginTop: height * 0.05}}>
    <View style={{flexDirection: 'column', gap: height * 0.02 }}>
        <Text>
            1. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.
        </Text>
        <Text>
            2. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.
        </Text>
        <Text>
            3. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.
        </Text>
        <Text>
            4. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.
        </Text>
        <Text>
            5. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.
        </Text>
    </View>
   </SafeAreaView>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})