import { ImageBackground, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Selection Menu 2.png'
import b14 from '../../assets/images/Button14.png'
import b15 from '../../assets/images/Button5.png'
import b16 from '../../assets/images/Button16.png'

const guitars = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground source = {bg} style = {styles.background}>
          <View style = {styles.content}>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b14} style = {styles.button}/>
            </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b15} style = {styles.button}/>
            </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b16} style = {styles.button}/>
            </Pressable>
          </View>
        </ImageBackground>
    </View>
  )
}

export default guitars

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

})