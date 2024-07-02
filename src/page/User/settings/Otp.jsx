import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OTPTextInput from 'react-native-otp-textinput'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')
const Otp = () => {
    const navigation = useNavigation();
    const handleResetPassword = () => {
        navigation.navigate("Reset Password")
    }
  return (
    <SafeAreaView>
 <View style={{paddingHorizontal: width * 0.05, }}>
      <Text style={{paddingVertical: height * 0.04}}>We sent a verification code to your email. Please
      check your email and enter the verification code.</Text>

      
    </View>
     {/* Otp setion start */}
     <View style={styles.OtpContainer}>
        <View style={{paddingLeft: width * 0.005}}>
        <OTPTextInput textInputStyle={{ borderColor: '#3886E9',borderWidth: 1,borderBottomWidth: 1, height: 70, width: 40, borderRadius: 10, backgroundColor: "white"}} inputCount={3} tintColor="#3886E9" offTintColor="#3886E9" />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.05, paddingVertical: height * 0.04}}>
        <Text>Did not get the code?</Text>
        <TouchableOpacity>
            <Text style={{color: "#3886E9", fontWeight: "bold"}}>Resend</Text>
        </TouchableOpacity>
      </View>

      {/* Save button start */}
      <View style={{paddingVertical: height * 0.40}}>
      
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
    onPress={() => handleResetPassword()}
style={{
            backgroundColor: '#0668E3',
            padding: 15,
            borderRadius: 5,
            width: width * 0.8,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Veryfy</Text>
        </TouchableOpacity>
      </View>
     </View>
    </SafeAreaView>
   
  )
}

export default Otp

const styles = StyleSheet.create({
    OtpContainer: {
        alignItems: "flex-start",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.03
    }
})