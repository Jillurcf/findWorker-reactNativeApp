import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import ProfileIcon from '../../../assets/images/icon/Icon.svg'
import HomIconFooter from '../../../assets/images/icon/HomesIconFooter.svg';
import Category from '../../../assets/images/icon/Category.svg';
import UserIcon from '../../../assets/images/icon/userIcon.svg'
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Footer = () => {
    const navigation = useNavigation()
    const handleHome = () => {
        navigation.navigate("Home")
    }
    return (
    <View style={styles.footerContainer}>
            <View style={styles.iconContainer}>
                <View style={{ alignItems: "center" }}>
                   <TouchableOpacity style={{alignItems: "center"}} onPress={() => handleHome()} >
                   <HomIconFooter />
                   <Text style={styles.HomeText}>Home</Text>
                   </TouchableOpacity>
                    {/* <Icon.Home stroke="white" fill="blue" width={32} height={32} /> */}
                  
                </View>
                <View style={{ alignItems: "center" }}>
                 <Category />

                </View>
                <View style={{ alignItems: "center" }}>
                <ProfileIcon style={{ color: '#f80' }}/>

                </View>
                <View style={{ alignItems: "center" }}>
                 <TouchableOpacity >
                 <UserIcon  />
                 </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: "#0668E3",
        // height: width * 0.25,
        position: "absolute",
        bottom: 0,  
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',

    },
    iconContainer: {
        alignItems: 'center',
        paddingTop: height * 0.02,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    HomeText: {
        alignItems: "center",
        color: "white"
    },
    iconStyle: {
        paddingTop: width * 0.02,
        color: "white",
        alignItems: "center",
        width: width * 0.2



    }
})