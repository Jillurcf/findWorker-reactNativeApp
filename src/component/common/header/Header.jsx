import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import Slider from './Slider'
import IconComponent from './IconComponent'

const Header = () => {
  return (
    <View>
    <IconComponent></IconComponent>
    <Slider></Slider>
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})