import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Dimensions } from 'react-native'
import React from 'react'
import StartIcon from '../../assets/images/icon/starIcon.svg';
import LocactionIcon from "../../assets/images/icon/LocationIcon.svg"
const {width, height} = Dimensions.get('window')
const RestaurantCard = ({items}) => {
  return (
    <TouchableWithoutFeedback >
    <View style={{borderColor: "#6AA4EE", borderWidth: 1, borderRadius: 10, padding: width * 0.03}}>
        <Image width={100} height={100} source={items.img}></Image>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
          <Text style={{fontWeight: "semibold", color: "#333333", paddingTop: height * 0.005}}>{items.name}</Text>
          <View style={{flexDirection: "row"}}>
            <StartIcon />
            <Text>( {items.rating} )</Text>
          </View>
        </View>
        <View style={{flexDirection: "row", paddingVertical: height * 0.01, gap: width * 0.008,}}>
        <LocactionIcon />
        <Text style={{color: "black"}}>{items.location}</Text>       
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})