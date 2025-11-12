import { StyleSheet, Text, View, ImageBackground, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import bg from '../../assets/images/Main Application Page (1).png';
import cimg from '../../assets/images/C.png';
import csharpimg from '../../assets/images/C#.png';
import dimg from '../../assets/images/D.png';
import dsharpimg from '../../assets/images/D#.png';
import eimg from '../../assets/images/E.png';
import fimg from '../../assets/images/F.png';
import fsharpimg from '../../assets/images/F#.png';
import gimg from '../../assets/images/G.png';
import gsharpimg from '../../assets/images/G#.png';
import aimg from '../../assets/images/A.png';
import asharpimg from '../../assets/images/A#.png';
import bimg from '../../assets/images/B.png';

export default function MainAppScreen() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Map each note to its image
  const notes = [
    { id: 'C', img: cimg },
    { id: 'D', img: dimg },
    { id: 'E', img: eimg },
    { id: 'F', img: fimg },
    { id: 'G', img: gimg },
    { id: 'A', img: aimg },
    { id: 'B', img: bimg },
  ];

  const sharps = [
    { id: 'C#', img: csharpimg },
    { id: 'D#', img: dsharpimg },
    { id: 'F#', img: fsharpimg },
    { id: 'G#', img: gsharpimg },
    { id: 'A#', img: asharpimg },
  ];

  const handlePress = (note) => {
    setActiveDropdown(activeDropdown === note ? null : note);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <Link href="/(tabs)/result" style={styles.text}>
          Click here!
        </Link>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRow1}>
          {sharps.map((note) => (
            <View key={note.id} style={styles.noteContainer}>
              <Pressable onPress={() => handlePress(note.id)}>
                <Image source={note.img} style={styles.noteImage} />
              </Pressable>

              {activeDropdown === note.id && (
                <View style={styles.dropdown}>
                   <Text style={styles.dropdownItem}>3</Text>
                  <Text style={styles.dropdownItem}>4</Text>
                  <Text style={styles.dropdownItem}>5</Text>
                  <Text style={styles.dropdownItem}>6</Text>
                  <Text style={styles.dropdownItem}>7</Text>
                  <Text style={styles.dropdownItem}>8</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRow2}>
          {notes.map((note) => (
            <View key={note.id} style={styles.noteContainer}>
              <Pressable onPress={() => handlePress(note.id)}>
                <Image source={note.img} style={styles.noteImage} />
              </Pressable>

              {activeDropdown === note.id && (
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownItem}>3</Text>
                  <Text style={styles.dropdownItem}>4</Text>
                  <Text style={styles.dropdownItem}>5</Text>
                  <Text style={styles.dropdownItem}>6</Text>
                  <Text style={styles.dropdownItem}>7</Text>
                  <Text style={styles.dropdownItem}>8</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '300'

  },

  scrollRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '50',
  },

  noteContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  noteImage: {
   
    resizeMode: 'contain',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
    paddingVertical: 5,
    paddingHorizontal: 12,
    elevation: 4,
  },
  dropdownItem: {
    fontSize: 20,
    paddingVertical: 3,
  },
});
