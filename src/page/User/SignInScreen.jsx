import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GoogleIcon from '../../assets/images/signInGoogleIcon.svg';
import AppleIcon from '../../assets/images/AppleIcon.svg';
import EyeIcon from '../../assets/images/eyeIcon.svg';
import EyeOffIcon from '../../assets/images/eyeOffIcon.svg';
const {width, height} = Dimensions.get('window');
const SignInScreen = () => {
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
        <Text style={styles.titleText}>Welcome to find worker</Text>
      </View>
      <View style={{paddingVertical: height * 0.1}}>
        <Text
          style={{
            textAlign: 'start',
            paddingLeft: width * 0.07,
            paddingVertical: height * 0.01,
            fontWeight: 'bold',
          }}>
          Email
        </Text>
        <View style={{alignItems: 'center', gap: 10}}>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              width: width * 0.8,
              backgroundColor: 'white',
              paddingLeft: 10,
              borderColor: 'white',
              borderWidth: width * 0.003,
              borderRadius: width * 0.02,
            }}></TextInput>
        </View>
        <Text
          style={{
            textAlign: 'start',
            paddingLeft: width * 0.07,
            paddingVertical: height * 0.01,
            fontWeight: 'bold',
          }}>
          Password
        </Text>
        <View style={{alignItems: 'center', gap: 10, flexDirection: ''}}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePass}
            placeholder="Enter Your Password"
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
        <Text
          style={{
            paddingLeft: width * 0.07,
            paddingVertical: height * 0.02,
            color: '#0668E3',
          }}>
          Forget password?
        </Text>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0668E3',
              padding: 15,
              borderRadius: 5,
              width: width * 0.8,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginVertical: height * 0.05}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.75,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text
                style={{width: 150, textAlign: 'center', fontWeight: 'bold'}}>
                or Continue with
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <GoogleIcon></GoogleIcon>
            <AppleIcon></AppleIcon>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={{fontSize: width * 0.05}}>Didn't have account?</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#0668E3',
                fontWeight: 'bold',
                fontSize: width * 0.05,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  titleText: {
    textAlign: 'center',
    paddingVertical: height * 0.05,
    color: '#333333',
    fontWeight: 'bold',
    fontSize: width * 0.05,
  },
});
