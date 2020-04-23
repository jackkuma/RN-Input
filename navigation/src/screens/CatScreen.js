import React from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

export default function CatScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={blockStyles.rowBlock}>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '波斯貓', catType: '長毛貓種', country: '伊朗'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/c/c8/%E9%87%91%E5%90%89%E6%8B%89.jpg'}}>
              <Text style={textStyles.title}>波斯貓</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '英國短毛貓', catType: '短毛貓種', country: '英國'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://pic2.58cdn.com.cn/zhuanzh/n_v2fb20e8c50d474e57b932ebd7f90c17ae.jpg'}}>
              <Text style={textStyles.title}>英國短毛貓</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '蘇格蘭摺耳貓', catType: '長毛貓種、短毛貓種', country: '蘇格蘭'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'http://petbird.tw/wp-content/uploads/a6/a512.jpg'}}>
              <Text style={textStyles.title}>蘇格蘭摺耳貓</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '孟加拉貓', catType: '短毛貓種', country: '美國'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://i2.kknews.cc/SIG=316ddc4/316o000294s0o4popn21.jpg'}}>
              <Text style={textStyles.title}>孟加拉貓</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '曼切堪貓', catType: '侏儒品種', country: '美國'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://cdn2.ettoday.net/images/1121/d1121328.jpg'}}>
              <Text style={textStyles.title}>曼切堪貓</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '西伯利亞貓', catType: '長毛貓種', country: '俄羅斯'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://c-ssl.duitang.com/uploads/item/201607/30/20160730164640_VYsyL.thumb.700_0.png'}}>
              <Text style={textStyles.title}>西伯利亞貓</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={blockStyles.rowBlock}>
        <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '喜馬拉雅貓', catType: '長毛貓種', country: '英國、美國'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://i1.kknews.cc/SIG=31d541k/288r0001pr24o23qp1qs.jpg'}}>
              <Text style={textStyles.title}>喜馬拉雅貓</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={blockStyles.block}
           onPress={() => props.navigation.push('CatDetail', {catName: '索馬利貓', catType: '長毛貓種', country: '澳大利亞'})}
          >
            <ImageBackground style={blockStyles.photoImg} 
            source={{uri:'https://photocdn.sohu.com/20120502/Img342186709.jpg'}}>
              <Text style={textStyles.title}>索馬利貓</Text>
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
