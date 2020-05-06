import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function FavoritesDetailScreen(props) {
    const passProps = props.route.params.passProps || 'Nothing Get!'
    
    return (
        <View>
          <ImageBackground style={blockStyles.sightView}
           source={{uri: passProps.Photo}}>
             <Text style={textStyles.cityName}>{passProps.City}</Text>
           </ImageBackground>
            <ScrollView style={blockStyles.scroll} alwaysBounceVertical={true} keyboardDismissMode='on-drag'>
              <Text style={blockStyles.summary}>{passProps.StayFeature}</Text>
            </ScrollView>
            <Text style={textStyles.item}><FontAwesome5 name={'info-circle'} size={18} color={'#75b79e'} /> 景點資訊:</Text>
            <View style={blockStyles.info}>
              <Text style={textStyles.infoText}><FontAwesome5 name={'clock'} size={15} solid /> 時間: {passProps.OpenHours}</Text>
              <Text style={textStyles.infoText}><FontAwesome5 name={'map-marked-alt'} size={15} /> 地址: {passProps.Address}</Text>
              <Text style={textStyles.infoText}><FontAwesome5 name={'phone-square'} size={17} /> 電話: {passProps.Tel}</Text>
            </View>
            <View style={blockStyles.location}>
              <TouchableOpacity style={blockStyles.geo}
               onPress={() => Linking.canOpenURL('https://www.google.com.tw/maps/place/' + passProps.Coordinate)
                .then(supported => {
                  if (!supported) {
                    console.log('Unsupported URL')
                  } else {
                    return Linking.openURL('https://www.google.com.tw/maps/place/' + passProps.Coordinate)
                  }
                }).catch(err => console.error('An error occurred ', err))}
              >
                <Text style={{color: '#fff'}}><FontAwesome5 name={'map-pin'} size={15} color={'#feb72b'} /> 座標：{passProps.Coordinate}</Text>
              </TouchableOpacity>
            </View>
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
});