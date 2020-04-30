import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
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

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx'

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

  const renderSights = (cards) => {
    return(
      <TouchableOpacity onPress={() => showSightDetail(cards)}>
        <View>
          <View style={blockStyles.cardView}>
            <Image style={[blockStyles.photoImage, {flex: 2}]} source={{uri: cards.Photo}} />
            <View style={{ flex: 3, padding: 10 }}>
              <Text style={textStyles.townName}>{cards.City + ' ' + cards.Town}</Text>
              <Text style={textStyles.subject}>{cards.Name}</Text>
            </View>
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
      {/* <Text>Trip</Text>
      <Text>{city}</Text>
      <Button
       title='go to Detail Page'
       onPress={() => props.navigation.push('TripDetail', {liveCity:(e) => changeCity(e)})}
      /> */}
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
