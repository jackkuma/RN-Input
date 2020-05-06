import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function FavoritesScreen(props) {

  const [myListCount, setMyListCount] = useState(0)
  const [myListName, setMyListName] = useState([])
  
  // const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      loadStorage()
    })
    return unsubscribe

  },[myListCount])

  const showSightDetail = (sight) => {
    props.navigation.push('FavoritesDetail',{passProps:sight})
  }

  const loadStorage = async() => {
    let listsGet = await StorageHelper.getMySetting('myList')
    let d = JSON.parse(listsGet)

    //方法1
    // let newArray = []
    // d.forEach((list) => {
    //   newArray.push(list.City + ' ' + list.Name)
    // })
    // setMyListCount(d.length)
    // setMyListName(newArray)

    //方法2
    setMyListCount(d.length)
    setMyListName(d)

  }

  return (
    <View>
      <View style={styles.favorite}>
        <Text style={{fontSize: 18}}>目前收藏景點數</Text>
        <View style={styles.favoritesNum}>
          <Text style={styles.num}>{myListCount}</Text>
        </View>
      </View>
      {/* 方法1渲染 */}
      {/* {
        myListName.map((sight, index) => {
          return(<Text key={index}>收藏的地點:{sight}</Text>)
        })
      } */}

      {/* 方法2渲染 */}
      {
        myListName.map((sight, index) => {
        return(
          <TouchableOpacity key={index} onPress={() => showSightDetail(sight)}>
            <View>
              <View style={blockStyles.cardView}>
                <Image style={blockStyles.photoImage} source={{uri: sight.Photo}} />
                <View style={{ flex: 3, padding: 10 }}>
                  <Text style={textStyles.townName}>{sight.City + ' ' + sight.Town}</Text>
                  <Text style={textStyles.subject}>{sight.Name}</Text>
                </View>
                <View style={blockStyles.more}>
                  <FontAwesome5 name={'angle-right'} size={40} color={'#b0eacd'} />
                </View>
              </View>
              <View style={blockStyles.seperator} />
            </View>
          </TouchableOpacity>
          )
        })
      }
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
  favorite: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 3,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  favoritesNum: {
    backgroundColor: '#ff5200',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  num: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }
});