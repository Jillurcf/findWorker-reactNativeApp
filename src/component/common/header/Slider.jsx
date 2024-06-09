
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import data from '../../../data/index';
import SlideItem from './SlideItem';

const Slider = () => {
  

    return (
       <View style={{marginTop:20}}>
         <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <SlideItem item={item} /> }
            horizontal
        />
       </View>
    );
};



export default Slider;
