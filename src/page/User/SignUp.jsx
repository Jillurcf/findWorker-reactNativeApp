import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EyeIcon from '../../assets/images/eyeIcon.svg';
import EyeOffIcon from '../../assets/images/eyeOffIcon.svg';
import DateOfBirthinput from '../../component/common/DateOfBirthinput';
import RadioButton from '../../component/common/RadioButton';
import SignupFlagimg from '../../assets/images/SignUpFlagIcon.svg';
const {height, width} = Dimensions.get('window');

const SignUp = () => {
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
        <Text style={styles.titleText}>Sign Up</Text>
      </View>
      <ScrollView>
        <View style={{paddingVertical: height * 0.005}}>
          <Text
            style={{
              textAlign: 'start',
              paddingLeft: width * 0.04,
              paddingVertical: height * 0.01,
              fontWeight: 'bold',
            }}>
            Full Name
          </Text>
          <View style={{alignItems: 'center', gap: 10}}>
            <TextInput
              placeholder="Enter Your Full Name"
              style={{
                width: width * 0.9,
                backgroundColor: 'white',
                paddingLeft: 10,
                borderColor: 'white',
                borderWidth: width * 0.003,
                borderRadius: width * 0.02,
              }}></TextInput>
          </View>
          <DateOfBirthinput />
          <View style={{paddingVertical: height * 0.02}}>
            <Text
              style={{
                textAlign: 'start',
                paddingLeft: width * 0.04,
                paddingVertical: height * 0.01,
                fontWeight: 'bold',
              }}>
              Gender
            </Text>
            {/* Radio */}
            <View style={{alignItems: 'center'}}>
              <RadioButton />
            </View>
          </View>

          {/* Email Input */}
          <View style={{paddingVertical: height * 0.0}}>
        <Text
          style={{
            textAlign: 'start',
            paddingLeft: width * 0.04,
            paddingVertical: height * 0.01,
            fontWeight: 'bold',
          }}>
          Email
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
        
          {/* Phone Number*/}
          <View style={{paddingVertical: height * 0.001}}>
            <Text
              style={{
                textAlign: 'start',
                paddingLeft: width * 0.04,
                paddingVertical: height * 0.01,
                fontWeight: 'bold',
              }}>
              Phone Number
            </Text>
            <View style={{alignItems: 'center', gap: 10}}>
              <View style={{flexDirection: 'row', gap: width * 0.03}}>
                {/* FlagIcon input */}
                <View>
                  <TextInput
                    placeholder="+44"
                    style={{
                      width: width * 0.3,
                      backgroundColor: 'white',
                      paddingLeft: 60,
                      borderColor: 'white',
                      borderWidth: width * 0.003,
                      borderRadius: width * 0.02,
                      position: 'relative',
                    }}></TextInput>
                  <SignupFlagimg
                    width={width * 0.1}
                    style={{position: 'absolute', top: height * 0.01}}
                  />
                </View>
                <TextInput
                  placeholder="Phone Number"
                  style={{
                    width: width * 0.5,
                    backgroundColor: 'white',
                    paddingLeft: 10,
                    borderColor: 'white',
                    borderWidth: width * 0.003,
                    borderRadius: width * 0.02,
                  }}></TextInput>
              </View>
            </View>
          </View>
        </View>

  {/* Password Input */}
  <View style={{paddingVertical: height * 0.001}}>
          <Text
            style={{
              textAlign: 'start',
              paddingLeft: width * 0.04,
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
                width: width * 0.85,
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
  {/* confirm Password Input */}
  <View style={{paddingVertical: height * 0.001}}>
          <Text
            style={{
              textAlign: 'start',
              paddingLeft: width * 0.04,
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
              placeholder="Confirm Your Password"
              style={{
                width: width * 0.85,
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
{/* SignUp Button */}

<View style={{alignItems: "center"}}>
<View style={{paddingVertical: height * 0.03, width: width * 0.85}}>
     <TouchableOpacity style={{borderColor: "#0668E3", borderWidth: width * 0.02, padding: width * 0.02, borderRadius: width * 0.03, backgroundColor: "#0668E3"}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize: width * 0.050, textAlign: "center"}}>Sign Up</Text>
     </TouchableOpacity>
     

     </View>
</View>
   

        <View style={{alignItems: 'center', paddingVertical: height * 0.05}}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{fontSize: width * 0.05}}>Already have account?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#0668E3',
                  fontWeight: 'bold',
                  fontSize: width * 0.05,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignUp;

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
