import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Main Application Page (1).png'


const mainapp = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {bg} style = {styles.background}>
         <Link href = "/(tabs)/result" style = {styles.text}>Click here!</Link>
      </ImageBackground>
    </View>
  )
}

export default mainapp

const styles = StyleSheet.create({
     container:{
    flex: 1
  },

  background:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    marginTop: '-50',
    flexDirection: 'column', // stack vertically
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50, // add space between images (React Native 0.71+)
  },
  button: {
    resizeMode: 'contain',
  },

  text:{
    color: "#fff",
    fontWeight: 'bold'
  }
})