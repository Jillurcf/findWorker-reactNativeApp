import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
 
} from 'react-native';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import VerfyEmailImg from '../../assets/images/VeryfyEmailImg.svg';
import OTPTextInput from 'react-native-otp-textinput'
import useUsers from '../../hooks/useUsers';


const {width, height} = Dimensions.get('window');
const VeryfyEmail = () => {
  // get data for test purpose
const {data} = useUsers();
console.log("21",data)

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#CCE0FA', '#F3F3F3']}>
      <View>
        <Text style={styles.titleText}>Veryfy Email</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <VerfyEmailImg />
      </View>
      <View style={{paddingLeft: width * 0.02, paddingVertical: height * 0.05, textAlign: "center"}}>
        <Text style={{textAlign: "center"}}>
          We sent a verification code to your email. Please check your email and
          enter the verification code.
        </Text>
      </View>
      {/* Otp setion start */}
      <View style={styles.OtpContainer}>
        <View style={{}}>
        <OTPTextInput textInputStyle={{backgroundColor: "", borderBottomWidth: 1, height: 70, width: 40, borderRadius: 10, backgroundColor: "white"}} inputCount={6} tintColor="white" offTintColor="white" />
        </View>
      <View>

      </View>
      </View>
      <View style={{paddingLeft: width * 0.02, paddingVertical: height * 0.05, textAlign: "center"}}>
<View style={{alignItems: "center"}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', width: width * 0.8, }}>
        <Text>Did not get the code?</Text>
        <TouchableOpacity>
          <Text style={{color: "#0668E3", fontWeight: "bold"}}>Resend</Text>
        </TouchableOpacity>
      </View>
</View>
      </View>
      <View style={{paddingVertical: height * 0.06}}>
        <TouchableOpacity style={{backgroundColor:"#0668E3", paddingVertical: height * 0.02, borderRadius: width * 0.02 }}>
          <Text style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize: 20}}>Veryfy</Text>
        </TouchableOpacity>
      </View>
      {
        data?.map((d, index)=> 
          <View key={index}>
            <Text>
              {d?.email}
            </Text>
          </View>
        )
      }
   
    </LinearGradient>
  );
};

export default VeryfyEmail;

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
  OtpContainer: {
alignItems: "center",
paddingHorizontal: width * 0.1
  }
});
