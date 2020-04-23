import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

export default function CatDetailScreen(props) {
  const catName = props.route.params.catName
  const catType = props.route.params.catType
  const country = props.route.params.country
  const [catImg, setCatImg] = useState()

  useEffect(() => {
    props.navigation.setOptions({ catName: catName })
    let myCat = ['波斯貓','英國短毛貓','蘇格蘭摺耳貓','孟加拉貓','曼切堪貓','西伯利亞貓','喜馬拉雅貓','索馬利貓']
    switch (catName) {
      case myCat[0]:setCatImg('https://upload.wikimedia.org/wikipedia/commons/c/c8/%E9%87%91%E5%90%89%E6%8B%89.jpg')
        break
      case myCat[1]:setCatImg('https://pic2.58cdn.com.cn/zhuanzh/n_v2fb20e8c50d474e57b932ebd7f90c17ae.jpg')
        break
      case myCat[2]:setCatImg('http://petbird.tw/wp-content/uploads/a6/a512.jpg')
        break
      case myCat[3]:setCatImg('https://i2.kknews.cc/SIG=316ddc4/316o000294s0o4popn21.jpg')
        break
      case myCat[4]:setCatImg('https://cdn2.ettoday.net/images/1121/d1121328.jpg')
        break
      case myCat[5]:setCatImg('https://c-ssl.duitang.com/uploads/item/201607/30/20160730164640_VYsyL.thumb.700_0.png')
        break
      case myCat[6]:setCatImg('https://i1.kknews.cc/SIG=31d541k/288r0001pr24o23qp1qs.jpg')
        break
      case myCat[7]:setCatImg('https://photocdn.sohu.com/20120502/Img342186709.jpg')
        break
      default:setCatImg('https://y3.yooho.com.tw/images/no_picture.gif')
        break
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={textStyles.name}>{catName}</Text>
      <Image style={blockStyles.photo} source={{uri: catImg}} />
      <View>
        <Text style={textStyles.word}>{catType}, {country}</Text>
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
