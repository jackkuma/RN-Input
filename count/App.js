import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState('#f15823')
  const [photoState, setPhotoState] = useState(false)
  //計次+1
  const addCount = () => setCount(count + 1)
  //計次-1
  const minusCount = () => {
    //判斷不為0時才執行-1
    if(count != 0) {
      setCount(count - 1)
    }
  }
  //計次歸0
  const resetCount = () => setCount(0)

  //更換count底色
  const changeColor = () => {
    let colorList = ['#000839', '#21bf73', '#fa163f', '#f15823', '#0779e4', '#543864', '#cc0e74', '#ffa41b', '#434e52']
    let i = Math.floor(Math.random() * colorList.length)
    colorList.forEach((colors, i) => {
      colorList[i] == colors
    })
    //console.log(colorList[i])
    setColors(colorList[i])
  }

  //切換圖片
  const toggleChange = () => {
    setPhotoState(!photoState)
    //切換同時將計次歸0
    resetCount()
    //切換同時隨機更換計次器底色
    changeColor()
  }

  return (
    <View style={styles.container}>
      <View style={styles.countBox}>
        {photoState ?
          <Image
            style={styles.photo}
            source={require('./src/images/handwash.png')}
          />
          :
          <Image
            style={styles.photo}
            source={require('./src/images/face-mask.png')}
          />
        }
        <View style={styles.countBlock}>
          {photoState ? <Text style={styles.word}>洗了</Text> : <Text style={styles.word}>買了</Text>}
          <Text style={[styles.count, {backgroundColor: colors}]}>{count}</Text>
          {photoState ? <Text style={styles.word}>次</Text> : <Text style={styles.word}>個</Text>}
        </View>

        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.btn, styles.add]} onPress={() => addCount()}>
            <Text style={styles.btnText}>＋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.minus]} onPress={() => minusCount()}>
            <Text style={styles.btnText}>－</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.resetBtn} onPress={() => resetCount()}>
          <Image
            style={styles.resetIcon}
            source={{uri: 'https://www.chrisign.ch/documents/blog/16x9/og_reload_icon_iconspider.jpg'}}
          />
        </TouchableOpacity>

        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.btn, {margin: 5}]} onPress={toggleChange}>
            <Text style={styles.btnText}>買口罩</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {margin: 5}]} onPress={toggleChange}>
            <Text style={styles.btnText}>勤洗手</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBox: {
    width: 320,
    padding: 10,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBlock: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  count: {
    width: 60,
    height: 60,
    borderRadius: 20,
    color: '#f3f3f3',
    fontSize: 32,
    fontWeight: '700',
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 60,
    margin: 5,
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    width: 120,
    height: 56,
  },
  btnText: {
    color: '#f7f7f7',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 56,
  },
  add: {
    backgroundColor: '#fa4252',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  minus: {
    backgroundColor: '#91bd3a',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  resetBtn: {
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    shadowColor: '#222',
    shadowOffset: {
        width: 1,
        height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  resetIcon: {
    width: 80,
    height: 80,
  },
  word: {
    fontSize: 30,
    fontWeight: '300',
  }
});
