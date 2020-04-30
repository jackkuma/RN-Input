import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function HomeScreen() {
  return (
    <ImageBackground style={{ flex: 1}}
     source={{uri:'https://image.freepik.com/free-photo/meadow-with-trees-wooden-fence_1160-287.jpg'}}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/img/village.png')} />
        <Text style={textStyles.title}>休閒農業旅遊</Text>
        <Text style={{color: '#2c7873'}}>Agritourism</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 256,
    marginBottom: 10,
  },
});
