import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RestaurantCard from './common/RestaurantCard';
const {width, height} = Dimensions.get('window');
const FeaturesRow = ({title, des, restuarants}) => {
  console.log('line-6', restuarants);
  return (
    <View style={{marginTop: height * 0.02}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: height * 0.02}}>
        <View style={{paddingLeft: width * 0.05, paddingBottom: height * 0.010}}>
          <Text
            style={{
             
              fontSize: width * 0.05,
              color: '#333333',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity style={{paddingRight: width * 0.05 }}>
          <Text style={{color: "#0668E3", fontWeight: "bold"}}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 10,
        }}
        style={{}}>
        {restuarants.map((restaurant, index) => {
          return <RestaurantCard key={index} items={restaurant} />;
        })}
      </ScrollView>
     
    </View>
  );
};

export default FeaturesRow;

const styles = StyleSheet.create({});
