import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
// import CustomComponent from '../switch/CustomComponent';

const NativeSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const onValueChange = (val) => {
    console.log('Switch value:', val);
    setSwitchValue(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.label}>Switch is {switchValue ? 'English' : 'Arabic'}</Text> */}
      <Switch
        value={switchValue}
        onValueChange={onValueChange}
        disabled={false}
        activeText={'Arabic'}
        inActiveText={'English'}
        circleSize={30}
        circleBorderWidth={0}
        activeTextStyle={{
          color: "black",
        }}
        inactiveTextStyle={{
          color: 'black'
        }}
        backgroundActive={0}
        backgroundInactive={0}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'green'}
        // renderInsideCircle={() => <CustomComponent />} // custom component inside the circle
        changeValueImmediately={true}
        innerCircleStyle={{ alignItems: "start", justifyContent: "start" }}
        outerCircleStyle={{}}
        renderActiveText={true} // Ensure this is true
        renderInActiveText={true} // Ensure this is true
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={4}
        switchBorderRadius={30}
      />
    </SafeAreaView>
  );
};

export default NativeSwitch;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
