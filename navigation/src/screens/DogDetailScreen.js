import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

export default function DogDetailScreen(props) {
  const dogName = props.route.params.dogName
  const dogType = props.route.params.dogType
  const country = props.route.params.country
  const [dogImg, setDogImg] = useState()

  useEffect(() => {
    props.navigation.setOptions({ dogName: dogName })
    let myDog = ['柴犬','黃金獵犬','柯基犬','博美犬','蝴蝶犬','鬆獅犬','吉娃娃','拉布拉多犬']
    switch (dogName) {
      case myDog[0]:setDogImg('https://5.share.photo.xuite.net/vincent1566/1588d45/7535809/285062020_m.jpg')
        break
      case myDog[1]:setDogImg('https://upload.wikimedia.org/wikipedia/commons/b/b0/Golden_Retriever_Buddy_0311.jpg')
        break
      case myDog[2]:setDogImg('https://img10.360buyimg.com/n1/jfs/t21568/4/180556165/424027/2fada5f6/5b0164c6N186085e0.jpg')
        break
      case myDog[3]:setDogImg('https://sbike.cn/b/bomeiquan/1.jpg')
        break
      case myDog[4]:setDogImg('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RileyPapillon.JPG/330px-RileyPapillon.JPG')
        break
      case myDog[5]:setDogImg('https://sbike.cn/b/songshiquan/2.jpg')
        break
      case myDog[6]:setDogImg('https://i2.kknews.cc/SIG=38jeqg/ctp-vzntr/153300119529672op76q657.jpg')
        break
      case myDog[7]:setDogImg('https://sbike.cn/b/labuladuoliequan/4.jpg')
        break
      default:setDogImg('https://y3.yooho.com.tw/images/no_picture.gif')
        break
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={textStyles.name}>{dogName}</Text>
      <Image style={blockStyles.photo} source={{uri: dogImg}} />
      <View>
        <Text style={textStyles.word}>{dogType}, {country}</Text>
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
