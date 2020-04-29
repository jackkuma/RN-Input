import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

let ANIMAL_DATA = [
  {
    "ID": "1",
    "Name": "波斯貓",
    "type": "長毛貓種",
    "country" : "伊朗",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/%E9%87%91%E5%90%89%E6%8B%89.jpg",
  },
  {
    "ID": "2",
    "Name": "英國短毛貓",
    "type": "短毛貓種",
    "country" : "英國",
    "photoUrl": "https://pic2.58cdn.com.cn/zhuanzh/n_v2fb20e8c50d474e57b932ebd7f90c17ae.jpg",
  },
  {
    "ID": "3",
    "Name": "蘇格蘭摺耳貓",
    "type": "長毛、短毛貓種",
    "country" : "蘇格蘭",
    "photoUrl": "http://petbird.tw/wp-content/uploads/a6/a512.jpg",
  },
  {
    "ID": "4",
    "Name": "孟加拉貓",
    "type": "短毛貓種",
    "country" : "美國",
    "photoUrl": "https://i2.kknews.cc/SIG=316ddc4/316o000294s0o4popn21.jpg",
  },
  {
    "ID": "5",
    "Name": "曼切堪貓",
    "type": "侏儒品種",
    "country" : "美國",
    "photoUrl": "https://cdn2.ettoday.net/images/1121/d1121328.jpg",
  },
  {
    "ID": "6",
    "Name": "西伯利亞貓",
    "type": "長毛貓種",
    "country" : "俄羅斯",
    "photoUrl": "https://c-ssl.duitang.com/uploads/item/201607/30/20160730164640_VYsyL.thumb.700_0.png",
  },
  {
    "ID": "7",
    "Name": "喜馬拉雅貓",
    "type": "長毛貓種",
    "country" : "英國、美國",
    "photoUrl": "https://i1.kknews.cc/SIG=31d541k/288r0001pr24o23qp1qs.jpg",
  },
  {
    "ID": "8",
    "Name": "暹羅貓",
    "type": "短毛貓種",
    "country" : "泰國",
    "photoUrl": "https://i2.kknews.cc/SIG=22rk3gr/26s10003qpr53897o25n.jpg",
  },
  {
    "ID": "9",
    "Name": "索馬利貓",
    "type": "長毛貓種",
    "country" : "澳大利亞",
    "photoUrl": "https://photocdn.sohu.com/20120502/Img342186709.jpg",
  },
  {
    "ID": "10",
    "Name": "柯拉特貓",
    "type": "短毛貓種",
    "country" : "泰國",
    "photoUrl": "https://i1.kknews.cc/SIG=2f3tqtm/r580017o932186q672s.jpg",
  },
]

export default function CatScreen(props) {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    let catList = ANIMAL_DATA
    setDataSource(catList)
  })

  const showCatDetail = (cats) => {
    props.navigation.push('CatDetail',{passProps:cats})
  }

  const renderCat = (cats) => {
    return(
      <TouchableOpacity
       activeOpacity={0.8}
       style={blockStyles.block}
       onPress={() => showCatDetail(cats)}
      >
        <ImageBackground style={blockStyles.photoImg} source={{uri: cats.photoUrl}}>
          <Text style={textStyles.title}>{cats.Name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
       style={{flex: 1, backgroundColor: '#fff'}}
       data={dataSource} 
       renderItem={cats => renderCat(cats.item)}
       keyExtractor={cats => cats.ID}
       numColumns={2}
      />
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
