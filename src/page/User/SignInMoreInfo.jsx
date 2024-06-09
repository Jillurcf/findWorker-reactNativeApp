import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CheckCircle, Circle} from 'react-native-feather';
import RadioButton from '../../component/common/RadioButton';

const {width, height} = Dimensions.get('window');

const SignInMoreInfo = ({options = [], selectedOption, onSelect}) => {
  
 
  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#CCE0FA', '#F3F3F3']}>
      <View>
        <Text style={styles.titleText}>More Information</Text>
      </View>
      {/* Date of Birth */}
      <View>
        <Text
          style={{paddingLeft: width * 0.03, paddingVertical: height * 0.01}}>
          Date of Birth
        </Text>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', gap: width * 0.02}}>
            <TextInput
              placeholder="DD"
              style={{
                width: width * 0.28,
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: width * 0.003,
                borderRadius: width * 0.02,
                textAlign: 'center',
                fontSize: 20,
                //   flex: 1
              }}></TextInput>
            <TextInput
              placeholder="MM"
              style={{
                width: width * 0.28,
                backgroundColor: 'white',

                borderColor: 'white',
                borderWidth: width * 0.003,
                borderRadius: width * 0.02,
                textAlign: 'center',
                fontSize: 20,
                //   flex: 1
              }}></TextInput>
            <TextInput
              placeholder="YY"
              style={{
                width: width * 0.28,
                backgroundColor: 'white',
                paddingLeft: 10,
                borderColor: 'white',
                borderWidth: width * 0.003,
                borderRadius: width * 0.02,

                textAlign: 'center',
                fontSize: 20,
                //   flex: 1
              }}></TextInput>
          </View>
        </View>
      </View>
      {/* Gender */}
      <View style={{paddingVertical: height * 0.05}}>
        <Text
          style={{
            paddingLeft: width * 0.0,
            paddingVertical: height * 0.01,
            color: '#333333',
            fontWeight: 'semibold',
          }}>
          Gender
        </Text>
        <View style={styles.container}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              style={styles.optionContainer}
              onPress={() => onSelect(option.value)}>
              {selectedOption === option.value ? (
                <Circle width={24} height={24} color="#0668E3" fill="#0668E3" />
              ) : (
                <Circle width={24} height={24} color="#000" />
              )}
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Address */}
      <View>
        <Text
        style={{
            paddingLeft: width * 0.0,
            paddingVertical: height * 0.01,
            color: '#333333',
            fontWeight: 'semibold',
          }}
        >Address</Text>
        <TextInput
              placeholder="Enter Your Address"
              style={{
                width: width * 0.85,
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: width * 0.03,
                borderRadius: width * 0.03,
                // textAlign: 'center',
                fontSize: 20,
                //   flex: 1
              }}></TextInput>
      </View>
     
      
      {/* SignIn Button */}
     <View style={{paddingVertical: height * 0.03}}>
     <TouchableOpacity style={{borderColor: "#0668E3", borderWidth: width * 0.02, padding: width * 0.05, borderRadius: width * 0.03, backgroundColor: "#0668E3"}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize: width * 0.050, textAlign: "center"}}>Sign In</Text>
     </TouchableOpacity>
     

     </View>
   
    </LinearGradient>
  );
};

export default SignInMoreInfo;

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

  container: {
    flexDirection: 'row',
    gap: width * 0.10
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
