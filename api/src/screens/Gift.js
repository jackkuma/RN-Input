import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'
import formStyles from '../styles/formStyles'

export default function GiftScreen(props) {

  const [dataSource, setDataSourse] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAgriculturalProduce.aspx'

    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((giftsData) => {
          setDataSourse(giftsData)
        })
        .catch((err) => {
          console.log('Error', err)
        })
  }

  const displayDetail = (gifts) => {
    props.navigation.push('GiftDetail',{passProps:gifts})
  }

  const renderGifts = (gifts) => {
    return(
      <TouchableOpacity activeOpacity={0.8} style={styles.cardView} onPress={() => displayDetail(gifts)}>
        <Image style={blockStyles.photoImage} source={{uri: gifts.Column1}} />
        <View>
          <Text numberOfLines={1} style={textStyles.productName}>{gifts.Name}</Text>
          <Text numberOfLines={1} style={textStyles.subject}>{gifts.ProduceOrg} <FontAwesome5 name={'angle-right'} size={18} color={'#84a9ac'} /></Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
       style={{flex: 1, backgroundColor: '#fff'}}
       data={dataSource}
       renderItem={gifts => renderGifts(gifts.item)}
       keyExtractor={gifts => gifts.ID}
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
  cardView: {
    width: '45%',
    height: 176,
    margin: 8,
  },
});
