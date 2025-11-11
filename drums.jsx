import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Selection Menu 2.png'
import b21 from '../../assets/images/Button21.png'
import b22 from '../../assets/images/Button22.png'
import b23 from '../../assets/images/Button23.png'
import b24 from '../../assets/images/Button24.png'

const drums = () => {
  return (
   <View style = {styles.container}>
          <ImageBackground source = {bg} style = {styles.background}>
              <View style = {styles.content}>
                 <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
                <Image source = {b21} style = {styles.button}/>
                </Pressable>
                 <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
                <Image source = {b22} style = {styles.button}/>
                </Pressable>
                 <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
                <Image source = {b23} style = {styles.button}/>
                </Pressable>
                 <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
                <Image source = {b24} style = {styles.button}/>
                </Pressable>
              </View>
          </ImageBackground>
      </View>
  )
}

export default drums

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