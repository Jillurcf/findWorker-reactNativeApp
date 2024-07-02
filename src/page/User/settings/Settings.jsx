import { Dimensions, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NativeSwitch from '../../../component/common/switch/NativeSwitch'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
// import SettingsModal from '../../../component/common/modal/SettingsModal'
const SettingsRightArrow = '../../../assets/images/chevron-right.png.png'

const {width, height} = Dimensions.get('window')
const Settings = () => {

// const [isModalVisiblle, setModalVisible] = useState(false)

  const navigation = useNavigation();
  const handleChangePassword = () => {
    navigation.navigate('Change Password')
  }
  const handleTermsOfConditions = () => {
    navigation.navigate('Terms of Conditions')
  }
  const handlePrivacyPolicy = () => {
    navigation.navigate('Privacy Policy')
  }
  const handleAboutUs = () => {
    navigation.navigate('About Us')
  }
  const handleSupport = () => {
    navigation.navigate('Support')
  }
  // const handleDeleteAcount = () => {
  //   setModalVisible(true)
  // }
  const closeModal = () => {
    setModalVisible()
  }
  return (
    <SafeAreaView style={{marginTop: height * 0.020, paddingHorizontal: width * 0.05}}>
    
    
      <View style={{flexDirection: "column", gap: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>
          Language
        </Text>
      <NativeSwitch />
      </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>
          Change Password
        </Text>
     <TouchableOpacity onPress={()=> handleChangePassword()}>
     <Image source={require('../../../assets/images/chevron-right.png')} />
     </TouchableOpacity>
        </View>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<Text>
          Terms of Conditions
        </Text>
        <TouchableOpacity onPress={()=> handleTermsOfConditions()}>
     <Image source={require('../../../assets/images/chevron-right.png')} />
     </TouchableOpacity>
</View>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<Text>
          Privacy Policy
        </Text>
        <TouchableOpacity onPress={()=> handlePrivacyPolicy()}>
     <Image source={require('../../../assets/images/chevron-right.png')} />
     </TouchableOpacity>
</View>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<Text>
          About us
        </Text>
        <TouchableOpacity onPress={()=> handleAboutUs()}>
     <Image source={require('../../../assets/images/chevron-right.png')} />
     </TouchableOpacity>
</View>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<Text>
          Support
        </Text>
        <TouchableOpacity onPress={()=> handleSupport()}>
     <Image source={require('../../../assets/images/chevron-right.png')} />
     </TouchableOpacity>
</View>



        <TouchableOpacity onPress={""}>
      <Text style={{color: "red"}}>
        Delete Account
      </Text>
     </TouchableOpacity>
     {/* <SettingsModal isVisible={isModalVisiblle} onClose={closeModal} /> */}
      </View>
     
    
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})