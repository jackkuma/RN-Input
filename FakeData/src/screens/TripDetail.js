import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function TripDetailScreen(props) {
    // const [cityName, setCityName] = useState('Taipei')
    const passProps = props.route.params.passProps || 'Nothing Get!'
    return (
        <View>
          <ImageBackground style={blockStyles.slightView}
           source={{uri: passProps.photoUrl}}>
             <Text style={[textStyles.cityName, {backgroundColor: '#000839', fontSize: 32, width: 120}]}>{passProps.city}</Text>
           </ImageBackground>
            <Text style={[textStyles.word, {textAlign: 'center'}]}>{passProps.title}</Text>
            <Text style={styles.summary}>{passProps.summary}</Text>
            <Text style={textStyles.item}><FontAwesome5 name={'hospital-symbol'} size={18} color={'#116979'} /> 住宿資訊:</Text>
            <View style={styles.hotel}>
              <Image style={styles.photo}
               source={{uri: passProps.lodgeImg}}
              />
              <Text style={{fontSize: 21}}>{passProps.lodging}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.toll}>費用：</Text>
              <Text style={styles.fee}>${passProps.fee}</Text>
            </View>
            {/* <Button 
             title='go back'
             onPress={() => props.navigation.pop()}
             />
             <Button
              title='change My Live City'
              onPress={() => props.route.params.liveCity('Tainan')}
              /> */}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    color: '#333',
    fontSize: 15,
    letterSpacing: 2,
    lineHeight: 24,
    padding: 10,
  },
  hotel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  photo: {
    borderRadius: 16,
    overflow: 'hidden',
    width: 120,
    height: 100,
  },
  price: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  toll: {
    alignSelf: 'baseline',
    paddingBottom: 5,
    fontSize: 15,
  },
  fee: {
    color: '#f54d27',
    fontSize: 32,
    fontWeight: '800',
  }
});