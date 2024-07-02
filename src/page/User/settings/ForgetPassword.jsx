import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')
const ForgetPassword = () => {
    const naviation = useNavigation()
    const handleGetOtp = () =>{
        naviation.navigate("OTP")
    }
  return (
   <SafeAreaView>
     {/* Email Input */}
     <View style={{paddingVertical: height * 0.05}}>
        <Text
          style={{
            textAlign: 'start',
            paddingLeft: width * 0.04,
            paddingVertical: height * 0.01,
            fontWeight: 'bold',
          }}>
          Enter Your Email Address to Veryfy OTP
        </Text>
        <View style={{alignItems: 'center', gap: 10}}>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              width: width * 0.85,
              backgroundColor: 'white',
              paddingLeft: 10,
              borderColor: 'white',
              borderWidth: width * 0.003,
              borderRadius: width * 0.02,
            }}></TextInput>
        </View>
        </View>
        {/* Get OTP button start */}
       <View style={{paddingVertical: height * 0.50}}>
      
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
        onPress={() => handleGetOtp()}

style={{
            backgroundColor: '#0668E3',
            padding: 15,
            borderRadius: 5,
            width: width * 0.8,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Get OTP</Text>
        </TouchableOpacity>
      </View>
     </View>
   </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})