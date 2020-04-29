import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

let ANIMAL_DATA = [
  {
    "ID": "1",
    "Name": "柴犬",
    "type": "日本犬種",
    "country" : "日本",
    "photoUrl": "https://5.share.photo.xuite.net/vincent1566/1588d45/7535809/285062020_m.jpg",
  },
  {
    "ID": "2",
    "Name": "黃金獵犬",
    "type": "槍獵犬種",
    "country" : "英國蘇格蘭",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Golden_Retriever_Buddy_0311.jpg",
  },
  {
    "ID": "3",
    "Name": "柯基犬",
    "type": "牧羊犬種",
    "country" : "英國威爾斯",
    "photoUrl": "https://img10.360buyimg.com/n1/jfs/t21568/4/180556165/424027/2fada5f6/5b0164c6N186085e0.jpg",
  },
  {
    "ID": "4",
    "Name": "博美犬",
    "type": "小型犬種",
    "country" : "德國、波蘭",
    "photoUrl": "https://sbike.cn/b/bomeiquan/1.jpg",
  },
  {
    "ID": "5",
    "Name": "蝴蝶犬",
    "type": "小型犬種",
    "country" : "西班牙、比利時",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RileyPapillon.JPG/330px-RileyPapillon.JPG",
  },
  {
    "ID": "6",
    "Name": "鬆獅犬",
    "type": "古代犬種",
    "country" : "中國",
    "photoUrl": "https://sbike.cn/b/songshiquan/2.jpg",
  },
  {
    "ID": "7",
    "Name": "吉娃娃",
    "type": "迷你犬種",
    "country" : "墨西哥",
    "photoUrl": "https://i2.kknews.cc/SIG=38jeqg/ctp-vzntr/153300119529672op76q657.jpg",
  },
  {
    "ID": "8",
    "Name": "拉布拉多犬",
    "type": "中大型犬種",
    "country" : "加拿大",
    "photoUrl": "https://sbike.cn/b/labuladuoliequan/4.jpg",
  },
  {
    "ID": "9",
    "Name": "哈士奇",
    "type": "中型犬種",
    "country" : "	俄羅斯(西伯利亞)",
    "photoUrl": "http://img1.goumin.com/cms/petschool/day_150124/20150124_59cd16a.jpg",
  },
  {
    "ID": "10",
    "Name": "比熊犬",
    "type": "小型犬種",
    "country" : "西班牙、比利時",
    "photoUrl": "https://i1.kknews.cc/SIG=34i2c4o/ctp-vzntr/1538447000725qq8o695680.jpg",
  },
  {
    "ID": "11",
    "Name": "沙皮狗",
    "type": "古代犬種",
    "country" : "中國",
    "photoUrl": "https://i1.kknews.cc/SIG=1l846d0/43500003qp03ps656n32.jpg",
  },
  {
    "ID": "12",
    "Name": "牛頭㹴",
    "type": "英格蘭犬種",
    "country" : "英國",
    "photoUrl": "https://i2.kknews.cc/SIG=1olapoc/3r70009p54or36n4o03.jpg",
  },
]

export default function DogScreen(props) {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    let dogList = ANIMAL_DATA
    setDataSource(dogList)
  })

  const showDogDetail = (dogs) => {
    props.navigation.push('DogDetail',{passProps:dogs})
  }

  const renderDog = (dogs) => {
    return(
      <TouchableOpacity
       activeOpacity={0.8}
       style={blockStyles.block}
       onPress={() => showDogDetail(dogs)}
      >
        <ImageBackground style={blockStyles.photoImg} source={{uri: dogs.photoUrl}}>
          <Text style={textStyles.title}>{dogs.Name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
       style={{flex: 1, backgroundColor: '#fff'}}
       data={dataSource} 
       renderItem={dogs => renderDog(dogs.item)}
       keyExtractor={dogs => dogs.ID}
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
