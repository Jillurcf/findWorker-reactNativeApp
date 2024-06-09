import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');
const DateOfBirthinput = () => {
  return (
    <View>
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
    </View>
  )
}

export default DateOfBirthinput

const styles = StyleSheet.create({})