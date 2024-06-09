import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')
const SlideItem = ({ item }) => {
    return (
        <View style={styles.container}>
          
          <View style={{}}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.icon}></Image>
            </View>
           
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
              
            </View>
          </View>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    container: {
        // width,
        // height,
        alignItems: 'center',
        marginLeft: width * 0.05


    },
    image: {
        flex: 0,
        width: width * 0.12,
        height: width* 0.12,  
    },
    imageContainer:{
        // borderWidth: 2,
        // borderColor: 'green',
        // borderRadius: 50, 
        // padding:10,
        marginBottom: 5,
        marginTop: width * 0.02,
        alignItems: 'center'
    },
    textContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: width * 0.02,
        fontWeight: 'bold',
        color: 'green'
    }
})