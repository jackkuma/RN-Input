import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function ScanScreen() {
  return (
    <ImageBackground style={{ flex: 1}}
     source={{uri:'https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg'}}>
      <View style={styles.container}>
        <View style={styles.scan}>
          <View style={[styles.scanLiner, {transform: [{ translateX: -15 }]}]}/>
        </View>
        <View style={styles.block}>
          <Text style={{fontSize: 21}}>掃描晶片資訊</Text>
          <Text style={{color: '#bbb'}}>--SCAN--</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  block: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  scan: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 25,
    width: 250,
    height: 250,
    marginBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  scanLiner: {
    backgroundColor: '#f54d27',
    width: 280,
    height: 2,
    shadowColor: '#000',
    shadowOffset: {
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    marginTop: '50%',
  }
});
