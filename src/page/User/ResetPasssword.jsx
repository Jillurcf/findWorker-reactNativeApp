import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ForgetPasswordImg from '../../assets/images/forgetPasswordImg.svg'
import EyeIcon from '../../assets/images/eyeIcon.svg';
import EyeOffIcon from '../../assets/images/eyeOffIcon.svg';

const {width, height} = Dimensions.get('window')
const ResetPasssword = () => {

    const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState('');
  const togglePasswordVisible = () => {
    setHidePass(!hidePass);
  };
  return (
    <LinearGradient
    style={styles.linearGradient}
    start={{x: 0.0, y: 0.25}}
    end={{x: 0.5, y: 1.0}}
    colors={['#CCE0FA', '#F3F3F3']}>
    <View>
      <Text style={styles.titleText}>Forget Password</Text>
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
      Password must have 8-10 characters.
      </Text>
    </View>
    {/* Password input */}
    <Text>Enter Password</Text>
    <View style={{alignItems: 'center', flexDirection: ''}}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePass}
            placeholder="Enter Your Password"
            style={{
              width: width * 0.9,
              backgroundColor: 'white',
              paddingLeft: 10,
              borderColor: 'white',
              borderWidth: width * 0.003,
              borderRadius: width * 0.02,
              position: 'relative',
              //   flex: 1
            }}></TextInput>
          {!hidePass ? (
             <EyeIcon
             onPress={() => setHidePass(!hidePass)}
             style={{
               position: 'absolute',
               right: width * 0.08,
               top: height * 0.02,
             }}></EyeIcon>
          ) : (


            <EyeOffIcon
              onPress={() => setHidePass(!hidePass)}
              style={{
                position: 'absolute',
                right: width * 0.09,
                top: height * 0.02,
              }}></EyeOffIcon>
           
          )}
        </View>
    {/* Confirm Password input */}
  <View style={{paddingVertical: height * 0.02}}>
  <Text>Confirm Password</Text>
    <View style={{alignItems: 'center', flexDirection: ''}}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePass}
            placeholder="Enter Your Password"
            style={{
              width: width * 0.9,
              backgroundColor: 'white',
              paddingLeft: 10,
              borderColor: 'white',
              borderWidth: width * 0.003,
              borderRadius: width * 0.02,
              position: 'relative',
              //   flex: 1
            }}></TextInput>
          {!hidePass ? (
             <EyeIcon
             onPress={() => setHidePass(!hidePass)}
             style={{
               position: 'absolute',
               right: width * 0.08,
               top: height * 0.02,
             }}></EyeIcon>
          ) : (


            <EyeOffIcon
              onPress={() => setHidePass(!hidePass)}
              style={{
                position: 'absolute',
                right: width * 0.09,
                top: height * 0.02,
              }}></EyeOffIcon>
           
          )}
        </View>
  </View>
    
    <View style={{paddingVertical: height * 0.1}}>
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
          Reset Password
        </Text>
      </TouchableOpacity>
    </View>

  </LinearGradient>
  )
}

export default ResetPasssword

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