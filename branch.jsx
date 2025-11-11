import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Branch Page (1).png'
import b3 from '../../assets/images/Button3.png'
import b4 from '../../assets/images/Button4.png'

const branch = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {bg} style = {styles.background}>
<View style = {styles.content}>
<Image source = {b3} style = {styles.buttons}/>
<Image source = {b4} style = {styles.buttons}/>
</View>
      </ImageBackground>
    </View>
  )
}

export default branch

const styles = StyleSheet.create({
  container:{
    flex: 1
  },

   background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content:{
    marginTop: '275',
    flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: 50,
  },

   buttons:{
     resizeMode: 'contain'
   }  
})