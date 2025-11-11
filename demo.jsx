import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import{Link, router} from 'expo-router'
import demo from '../../assets/images/Demo.png'




const demoPage = () => {
  return (
    <View style = {styles.container}>
     <ImageBackground source = {demo} style = {styles.background}>
     <Link href = '/(tabs)/branch' style = {styles.link}>Click here when mesmerized!</Link>
      </ImageBackground>
    </View>
  )
}

export default demoPage

const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    background:{
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    link:{
        color: '#fff',
        marginTop: 500,
        alignSelf: 'center'
    }
})
