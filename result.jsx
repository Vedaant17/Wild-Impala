import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import bg from '../../assets/images/Result page + Other options (1).png'
import b25 from '../../assets/images/Button25.png'
import b26 from '../../assets/images/Button26.png'
import tx from '../../assets/images/Bravo on a job well done!.png'
import score from '../../assets/images/Row - Text Field.png'




const result = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground source = {bg} style = {styles.background}>
            <View style = {styles.content}>
                <Image source = {score}/>
                <Image source = {tx}/>
                <Pressable onPress={() => router.push('/(tabs)/about')}>
                <Image source = {b25} style = {styles.button}/>
                </Pressable>
                <Pressable onPress={() => router.push('/(tabs)')}>
                <Image source = {b26} style = {styles.button}/>
                </Pressable>
            </View>
        </ImageBackground>
      
    </View>
  )
}

export default result

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