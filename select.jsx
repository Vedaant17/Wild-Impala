import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Selection Menu.png'
import b5 from '../../assets/images/Button5.png'
import b6 from '../../assets/images/Button6.png'
import b7 from '../../assets/images/Button7.png'
import b8 from '../../assets/images/Button8.png'
import tx from '../../assets/images/PICK AN INSTRUMENT!.png'


const select = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {bg} style = {styles.background}>
      <View>
        <Image source = {tx} style = {styles.logo}/>
      </View>
       <View style = {styles.content}>
        <Pressable onPress={() => router.push('/(tabs)/keys')}>
        <Image source = {b5} style = {styles.button}/>
        </Pressable>
        <Pressable onPress={() => router.push('/(tabs)/guitars')}>
        <Image source = {b6} style = {styles.button}/>
        </Pressable>
        <Pressable onPress={() => router.push('/(tabs)/bass')}>
        <Image source = {b7} style = {styles.button}/>
        </Pressable>
        <Pressable onPress={() => router.push('/(tabs)/drums')}>
        <Image source = {b8} style = {styles.button}/>
        </Pressable>
       </View>
      </ImageBackground>
    </View>
  )
}

export default select

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
    marginTop: '75',
    flexDirection: 'column', // stack vertically
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50, // add space between images (React Native 0.71+)
  },
  button: {
    resizeMode: 'contain',
  },

  logo:{
    marginTop: '-50'
  }
})