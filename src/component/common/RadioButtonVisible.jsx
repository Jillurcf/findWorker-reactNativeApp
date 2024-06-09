import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import {CheckCircle, Circle} from 'react-native-feather';
const {width, height} = Dimensions.get('window')
const RadioButtonVisible = ({options = [], selectedOption, onSelect}) => {
    console.log("line-6", options.value)
    
  return (
     <View style={{paddingVertical: height * 0.00}}>
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
  )
}

export default RadioButtonVisible

const styles = StyleSheet.create({
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
})