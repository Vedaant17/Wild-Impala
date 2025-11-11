import { StyleSheet, View, Image, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import {router} from 'expo-router'
import lp from '../../assets/images/Landing Page Blank.png';
import b1 from '../../assets/images/Button (1).png';
import b2 from '../../assets/images/Button.png';
import l1 from '../../assets/images/Impala Code.png'
import l2 from '../../assets/images/WILD IMPALA.png'
import dc from '../../assets/images/A tool for synesthesic individuals to focus their senses in a creative direction.png'



const About = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={lp} style={styles.background}>
        <View style = {styles.logo}>
            <Image source = {l1} style = {styles.l1}/>
            <Image source = {l2} style = {styles.l2}/>
        </View>
        <View style={styles.content}>
            <Pressable onPress={() => router.push('/(tabs)/demo')}>
          <Image source={b1} style={styles.button} />
          </Pressable>
          <Pressable onPress={()=> router.push('/(tabs)')}>
          <Image source={b2} style={styles.button} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column', // stack vertically
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50, // add space between images (React Native 0.71+)
  },
  button: {
    resizeMode: 'contain',
  },
  logo:{
    marginBottom: 525,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',

  },

  l1:{
   
  },

  l2:{
    position: 'absolute',
  },

  dsc:{
    alignSelf: 'center',
    width: '75%',
    height: '75%'
  }
});


