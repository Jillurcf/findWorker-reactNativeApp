import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ForgetPasswordImg from "../../assets/images/forgetPasswordImg.svg"
const {width, height} = Dimensions.get("window")
const ForgetPassword = () => {
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
        Enter email address to reset password.
        </Text>
      </View>
      {/* Email input */}
        <View>
            <Text>Email</Text>
            <TextInput
            style={{borderColor: "white", borderWidth: 1, backgroundColor: "white", borderRadius: 5}}
            >
                
            </TextInput>
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
  );
};

export default ForgetPassword;

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
  