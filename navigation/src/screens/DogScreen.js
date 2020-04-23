import React from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

export default function DogScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={blockStyles.rowBlock}>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '柴犬', dogType: '日本犬種', country: '日本'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://5.share.photo.xuite.net/vincent1566/1588d45/7535809/285062020_m.jpg'}}>
              <Text style={textStyles.title}>柴犬</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '黃金獵犬', dogType: '槍獵犬種', country: '英國蘇格蘭'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/b/b0/Golden_Retriever_Buddy_0311.jpg'}}>
              <Text style={textStyles.title}>黃金獵犬</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '柯基犬', dogType: '牧羊犬種', country: '英國威爾斯'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://img10.360buyimg.com/n1/jfs/t21568/4/180556165/424027/2fada5f6/5b0164c6N186085e0.jpg'}}>
              <Text style={textStyles.title}>柯基犬</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '博美犬', dogType: '小型犬種', country: '德國、波蘭'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://sbike.cn/b/bomeiquan/1.jpg'}}>
              <Text style={textStyles.title}>博美犬</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '蝴蝶犬', dogType: '小型犬種', country: '西班牙、比利時'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RileyPapillon.JPG/330px-RileyPapillon.JPG'}}>
              <Text style={textStyles.title}>蝴蝶犬</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '鬆獅犬', dogType: '古代犬種', country: '中國'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://sbike.cn/b/songshiquan/2.jpg'}}>
              <Text style={textStyles.title}>鬆獅犬</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '吉娃娃', dogType: '迷你犬種', country: '墨西哥'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://i2.kknews.cc/SIG=38jeqg/ctp-vzntr/153300119529672op76q657.jpg'}}>
              <Text style={textStyles.title}>吉娃娃</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('DogDetail', {dogName: '拉布拉多犬', dogType: '中大型犬種', country: '加拿大'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://sbike.cn/b/labuladuoliequan/4.jpg'}}>
              <Text style={textStyles.title}>拉布拉多犬</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
});
