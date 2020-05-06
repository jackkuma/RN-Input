import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'
import formStyles from '../styles/formStyles'

export default function TripScreen(props) {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetchData()
  },[]) //加入空陣列，只在componentDidMount載入時執行fetch

  useEffect(() => {
    let getAllList = []

    dataSource.map(d => {
      if(d.addToMyList === true) {
        getAllList.push(d)
      }
    })
    saveToStorage(getAllList)
  })

  const saveToStorage = async(getMyLists) => {
    try {
      await StorageHelper.setMySetting('myList', JSON.stringify(getMyLists))
    } catch(err) {
      console.log(err)
    }
  }

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelStay.aspx'

    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((sightsData) => {
          setDataSource(sightsData)
        })
        .catch((err) => {
          console.log('Error', err)
        })
  }

  const showSightDetail = (cards) => {
    props.navigation.push('TripDetail',{passProps:cards})
  }

const pressRow = (cards) => {
  const newDatas = dataSource.map(d => {
    let copyList = {...d}
    if(copyList.ID === cards.ID) {
      copyList.addToMyList = !copyList.addToMyList
    }
    return copyList
  })
  setDataSource(newDatas)
}

  const renderSights = (cards) => {
    return(
      <TouchableOpacity onPress={() => showSightDetail(cards)}>
        <View>
          <View style={blockStyles.cardView}>
            <Image style={blockStyles.photoImage} source={{uri: cards.Photo}} />
            <View style={{ flex: 3, padding: 10 }}>
              <Text style={textStyles.townName}>{cards.City + ' ' + cards.Town}</Text>
              <Text style={textStyles.subject}>{cards.Name}</Text>
            </View>
            <TouchableOpacity style={formStyles.checkSquare} onPress={() => pressRow(cards)}>
              {cards.addToMyList === true ?
               <FontAwesome5 name={'star'} size={32} color={'#fd5e53'} solid/> : 
               <FontAwesome5 name={'star'} size={32} color={'#b0eacd'} Regular />
              }
            </TouchableOpacity>
            <View style={blockStyles.more}>
              <FontAwesome5 name={'angle-right'} size={40} color={'#b0eacd'} />
            </View>
          </View>
          <View style={blockStyles.seperator} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data={dataSource}
        renderItem={cards => renderSights(cards.item)}
        keyExtractor={cards => cards.ID}
        style={{backgroundColor: '#fff'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
