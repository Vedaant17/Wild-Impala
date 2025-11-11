import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Selection Menu 2.png'
import b9 from '../../assets/images/Button9.png'
import b10 from '../../assets/images/Button10.png'
import b11 from '../../assets/images/Button11.png'
import b12 from '../../assets/images/Button12.png'
import b13 from '../../assets/images/Button13.png'


const keys = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {bg} style = {styles.background}>
        <View style = {styles.content}>
            <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b9} style = {styles.button}/>
            </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b10} style = {styles.button}/>
             </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b11} style = {styles.button}/>
             </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b12} style = {styles.button}/>
             </Pressable>
             <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
            <Image source = {b13} style = {styles.button}/>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default keys

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