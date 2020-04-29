import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

export default function CatDetailScreen(props) {
  const passProps = props.route.params.passProps || 'Nothing Get!'

  return (
    <View style={styles.container}>
      <Text style={textStyles.name}>{passProps.Name}</Text>
      <Image style={blockStyles.photo} source={{uri: passProps.photoUrl}} />
      <View>
        <Text style={textStyles.word}>{passProps.type}, {passProps.country}</Text>
      </View>
      <TouchableOpacity style={blockStyles.btn} onPress={() => props.navigation.pop()}>
        <Text style={{color: '#f7f7f7'}}>返回列表</Text>
      </TouchableOpacity>
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
