import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Selection Menu 2.png'
import b17 from '../../assets/images/Button17.png'
import b18 from '../../assets/images/Button18.png'
import b19 from '../../assets/images/Button19.png'
import b20 from '../../assets/images/Button20.png'

const bass = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground source = {bg} style = {styles.background}>
            <View style = {styles.content}>
              <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
               <Image source = {b17} style = {styles.button}/>
               </Pressable>
                <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
              <Image source = {b18} style = {styles.button}/>
              </Pressable>
               <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
              <Image source = {b19} style = {styles.button}/>
              </Pressable>
               <Pressable onPress={() => router.push('/(tabs)/mainapp')}>
              <Image source = {b20} style = {styles.button}/>
              </Pressable>
            </View>
        </ImageBackground>
    </View>
  )
}

export default bass

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