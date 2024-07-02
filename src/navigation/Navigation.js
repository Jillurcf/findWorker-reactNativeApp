import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../page/HomeScreen';
// import CarWash from '../page/CarWash';
// import Categories from '../component/Categories';
// import CleanHome from '../page/CleanHome';
import Main from '../page/Main';
import CategoryScreen from '../page/CategoryScreen';
import SearchScreen from '../page/User/SearchScreen';
import Settings from '../page/User/settings/Settings';
import ChangePasssword from '../page/User/settings/ChangePassword';
import ForgetPassword from '../page/User/settings/ForgetPassword';
import Otp from '../page/User/settings/Otp';
import ResetPassword from '../page/User/settings/ResetPassword';
import TermsOfConditions from '../page/User/settings/TermsOfConditions';
import PrivacyPolicy from '../page/User/settings/PrivacyPolicy';
import AboutUs from '../page/User/settings/AboutUs';
import Support from '../page/User/settings/Support';


const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={{
        headerShown: false
    }}>  
      <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown: false}} />
      <Stack.Screen name="searchScreen" component={SearchScreen} options={{headerShown: false}} />
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Change Password" component={ChangePasssword} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="OTP" component={Otp} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Reset Password" component={ResetPassword} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Terms of Conditions" component={TermsOfConditions} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="About Us" component={AboutUs} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
      <Stack.Screen name="Support" component={Support} options={{headerShown: true, headerTitleAlign: "center", headerTintColor: '#0668E3',}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}