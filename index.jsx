import { View, Text, StyleSheet,Image, ImageBackground,Button} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import sp from '../../assets/images/react-logo.png'
import bg from '../../assets/images/Splash Screen.png'



const App = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {bg} style = {styles.background}>
        <Link href = "/(tabs)/about" style = {styles.text}>Landing Page</Link>
      </ImageBackground>
    </View>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },

  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150
  },

  image:{
   marginVertical: 20,
   alignItems: 'center'
  },

  background:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems: 'center'
  }
})