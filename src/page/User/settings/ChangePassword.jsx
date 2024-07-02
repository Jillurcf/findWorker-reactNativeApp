import { Dimensions, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NativeSwitch from '../../../component/common/switch/NativeSwitch'
import { SafeAreaView } from 'react-native-safe-area-context'
import EyeIcon from '../../../assets/images/eyeIcon.svg';
import EyeOffIcon from '../../../assets/images/eyeOffIcon.svg';
import { useNavigation } from '@react-navigation/native';
const SettingsRightArrow = '../../../assets/images/chevron-right.png.png'

const {width, height} = Dimensions.get('window')
const ChangePasssword = () => {
    const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState('');
  const togglePasswordVisible = () => {
    setHidePass(!hidePass);
  };

  const navigation = useNavigation()

  const handleForgetPassword =() => {
    navigation.navigate("Forget Password")
  }
  return (
    <SafeAreaView style={{marginTop: height * 0.020, paddingHorizontal: width * 0.05, }}>
<View style={{flexDirection: 'column', gap: height * 0.05
 }}>
    {/* Current password start */}
   <View>

<Text
       style={{
         textAlign: 'start',
         paddingLeft: width * 0.07,
         paddingVertical: height * 0.01,
         fontWeight: 'bold',
       }}>
 Current Password
     </Text>
     <View style={{alignItems: 'center', gap: 10, flexDirection: ''}}>
       <TextInput
         value={password}
         onChangeText={setPassword}
         secureTextEntry={hidePass}
         placeholder="Enter Current Password"
         style={{
           width: width * 0.8,
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
           width: width * 0.8,
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
           width: width * 0.8,
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
<TouchableOpacity >
<Text
onPress={()=> handleForgetPassword()}
          style={{
            paddingLeft: width * 0.07,
            paddingVertical: height * 0.02,
            color: '#0668E3',
          }}>
          Forget password?
        </Text>
</TouchableOpacity>


</View>
{/* Save button start */}
       <View style={{paddingVertical: height * 0.20}}>
      
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity

style={{
              backgroundColor: '#0668E3',
              padding: 15,
              borderRadius: 5,
              width: width * 0.8,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Save</Text>
          </TouchableOpacity>
        </View>
       </View>
    
    </SafeAreaView>
  )
}

export default ChangePasssword;

const styles = StyleSheet.create({})