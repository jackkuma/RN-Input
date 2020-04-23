import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useMappedState, useDispatch } from 'redux-react-hook'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function HomeScreen() {

  const [nickName, setNickName] = useState('')
  const myNickName = useMappedState(state => state.nickName)

  return (
    <ImageBackground style={{ flex: 1}}
     source={{uri:'https://image.freepik.com/free-photo/blur-hospital-clinic-interior_74190-5207.jpg'}}>
      <View style={styles.container}>
        <Text style={textStyles.title}>Hello, {myNickName}</Text>
        <View style={[blockStyles.block, styles.ticketTitle]}>
          <Text style={[textStyles.title, {color: '#f7f7f7'}]}>高雄 ⇌ 札幌</Text>
          <Text style={{color: '#f0f0f0'}}>2020年11月16日 ｜ 成人 2</Text>
        </View>
        <View style={[blockStyles.block, {backgroundColor: 'rgba(255,255,255,0.6)'}]}>
          <Text style={textStyles.word}>去程：高雄 - 札幌</Text>
          <Text style={textStyles.remarkText}>11月16日  08:05 ｜ 高雄國際機場</Text>
          <Text style={textStyles.remarkText}>11月16日  12:40 ｜ 新千歳空港　</Text>
        </View>
        <View style={{height: 1}} />
        <View style={[blockStyles.block, {backgroundColor: 'rgba(255,255,255,0.8)'}]}>
          <Text style={textStyles.word}>回程：札幌 - 高雄</Text>
          <Text style={textStyles.remarkText}>11月21日  12:45 ｜ 新千歳空港　</Text>
          <Text style={textStyles.remarkText}>11月21日  15:40 ｜ 高雄國際機場</Text>
        </View>
        <View  style={{height: 1}} />
        <View style={[blockStyles.block, {backgroundColor: '#f7f7f7'}]}>
          <Image style={styles.barCode}
           source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Barcode2of5example.svg/1200px-Barcode2of5example.svg.png'}}
          ></Image>
        </View>
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
  ticketTitle: {
    backgroundColor: '#005082',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  barCode: {
    width: 200,
    height: 38,
    margin:5,
  }
});
