import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EyeIcon from '../../../assets/images/eyeIcon.svg';
import EyeOffIcon from '../../../assets/images/eyeOffIcon.svg';
const {width, height} = Dimensions.get('window')
const ResetPassword = () => {
    const [hidePass, setHidePass] = useState(true);
    const [password, setPassword] = useState('');
    const togglePasswordVisible = () => {
      setHidePass(!hidePass);
    };


    const HandleUpdate = () => {
        console.log("updated")
    }
    return (
    <SafeAreaView style={{marginTop: height * 0.05}}>
        {/* New password start */}
<View>

<Text
       style={{
         textAlign: 'start',
         paddingLeft: width * 0.07,
         paddingVertical: height * 0.01,
         fontWeight: 'bold',
       }}>
       New Password
     </Text>
     <View style={{alignItems: 'center', gap: 10, flexDirection: ''}}>
       <TextInput
         value={password}
         onChangeText={setPassword}
         secureTextEntry={hidePass}
         placeholder="Enter New Password"
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
            right: width * 0.09,
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
{/* Confirm password start */}
<View>

<Text
       style={{
         textAlign: 'start',
         paddingLeft: width * 0.07,
         paddingVertical: height * 0.01,
         fontWeight: 'bold',
       }}>
Confirm Password
     </Text>
     <View style={{alignItems: 'center', gap: 10, flexDirection: ''}}>
       <TextInput
         value={password}
         onChangeText={setPassword}
         secureTextEntry={hidePass}
         placeholder="Enter Confirm Password"
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
            right: width * 0.09,
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
{/* Save button start */}
<View style={{paddingVertical: height * 0.45}}>
      
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
    onPress={() => HandleUpdate()}
style={{
            backgroundColor: '#0668E3',
            padding: 15,
            borderRadius: 5,
            width: width * 0.8,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Update</Text>
        </TouchableOpacity>
      </View>
     </View>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({})