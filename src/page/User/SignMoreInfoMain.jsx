import React, {useState} from 'react';
import SignInMoreInfo from './SignInMoreInfo';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const SignMoreInfoMain = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Define the options array
  const options = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Others', value: '3'},
  ];

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#CCE0FA', '#F3F3F3']}>
      <SignInMoreInfo
        options={options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />

      {/* </SafeAreaView> */}
    </LinearGradient>
  );
};
export default SignMoreInfoMain;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
