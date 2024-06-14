import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ForgetPasswordImg from '../../assets/images/forgetPasswordImg.svg'
import OTPTextInput from 'react-native-otp-textinput'
const {width, height} = Dimensions.get('window')
const OtpForgetPassword = () => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#CCE0FA', '#F3F3F3']}>
      <View>
        <Text style={styles.titleText}>OTP</Text>
      </View>
      <View style={{alignItems: 'center'}}>
       <ForgetPasswordImg />
      </View>
      <View
        style={{
          paddingLeft: width * 0.02,
          paddingVertical: height * 0.05,
          textAlign: 'center',
        }}>
        <Text style={{textAlign: ''}}>
        Pease Enter the OTP Code.
        </Text>
      </View>
{/* Otp setion start */}
<View style={styles.OtpContainer}>
        <View style={{}}>
        <OTPTextInput textInputStyle={{backgroundColor: "", borderBottomWidth: 1, height: 70, width: 40, borderRadius: 10, backgroundColor: "white"}} inputCount={6} tintColor="white" offTintColor="white" />
        </View>
      </View>

      
      <View style={{paddingVertical: height * 0.2}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0668E3',
            paddingVertical: height * 0.02,
            borderRadius: width * 0.02,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Veryfy
          </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  )
}

export default OtpForgetPassword

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    titleText: {
      textAlign: 'center',
      paddingVertical: height * 0.08,
      color: '#333333',
      fontWeight: 'bold',
      fontSize: width * 0.05,
    },
      });