import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.semicircle}>
        <Text style={styles.go}>Let's Go</Text>
        <Text>ONE NIGHT</Text>
        <Text style={{color: '#f1f1f1'}}>In a Countryside Eden</Text>
      </View>
      <Image style={styles.photo} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/30/13/01/culture-village-2356862_1280.jpg'}} />
      <View style={{padding: 32, position: 'relative'}}>
        <Text style={styles.titleName}>來到農村</Text>
        <Text style={styles.titleLive}>住</Text>
        <Text style={styles.oneNight}>一晚</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  semicircle: {
    backgroundColor: '#3490de',
    borderBottomRightRadius: 56,
    borderBottomLeftRadius: 120,
    overflow: 'hidden',
    width: '100%',
    height: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 32,
    position: 'relative',
  },
  go: {
    color: 'rgba(255,255,255,0.15)',
    fontSize: 72,
    fontWeight: 'bold',
    width: 160,
    lineHeight: 64,
    top: 88,
    left: 32,
    position: 'absolute',
  },
  photo: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '90%',
    height: 168,
    marginTop: -96,
  },
  titleName: {
    fontSize: 48,
  },
  titleLive: {
    backgroundColor: '#feb72b',
    borderRadius: 40,
    color: '#fff',
    fontSize: 56,
    textAlign: 'center',
    width: 80,
    height: 80,
    position: 'absolute',
    top: 88,
  },
  oneNight: {
    fontSize: 32,
    marginLeft: 56,
  }
});