import { Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import LoginImg from '../../assets/images/LoginPageImg.svg';
import LoginUserImg from "../../assets/images/LoginButtonUser";
import LoginServiceImg from '../../assets/images/LoginServiceProviderImg.svg'
const {width, height} = Dimensions.get("window")
const WelcomeScreen = () => {
  return (
    <LinearGradient style={styles.linearGradient}  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={[ "#CCE0FA", "#F3F3F3" ]} >
        <View>
            <Text style={styles.titleText}>Welcome to find worker</Text>
        </View>
        <View>
            <LoginImg width={width * 0.9} height={height * 0.5} />
        </View>
        <View>
            <Text style={{textAlign: "center", color: "#0668E3", fontWeight: "bold", paddingVertical: width * 0.03, fontSize: width * 0.05}}>Join As</Text>
           <View>
           <TouchableOpacity style={{backgroundColor: "#0668E3", padding: width * 0.02, borderRadius: 5, }} >
           <View style={{flexDirection: "row", gap: width * 0.02, alignItems: "center", textAlign:"center", justifyContent: "center" }}>
           <LoginUserImg width={width * 0.06} height={height * 0.06} />
           <Text style={{color: "white", fontSize: width * 0.05, fontWeight: "bold"}}>User</Text>
           </View>
           </TouchableOpacity>
           </View>
          <View >
          <TouchableOpacity style={{borderColor: "#0668E3", borderWidth: width * 0.002, padding: width * 0.02, borderRadius: 5, marginTop: width * 0.04}} >
           <View style={{flexDirection: "row", gap: width * 0.02, alignItems: "center", textAlign:"center", justifyContent: "center" }}>
           <LoginServiceImg width={width * 0.06} height={height * 0.06} />
           <Text style={{color: "#0668E3", fontSize: width * 0.05, fontWeight: "bold"}}>Service Provider</Text>
           </View>
           </TouchableOpacity>
          </View>
        </View>
<Text></Text>
    </LinearGradient>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      titleText: {
        textAlign: "center",
        paddingVertical: height * 0.05,
        color: "#333333",
        fontWeight: "bold",
        fontSize: width * 0.05
      }
})