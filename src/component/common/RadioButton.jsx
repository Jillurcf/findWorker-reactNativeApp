import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import RadioButtonVisible from './RadioButtonVisible';

const {width, height} = Dimensions.get('window');

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log("line-10", selectedOption)

  // Define the options array
  const options = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Others', value: '3'},
  ];

  return (
    <View
    >
      <RadioButtonVisible   
        options={options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />

      {/* </SafeAreaView> */}
    </View>
  );
};
export default RadioButton;


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
 
});
