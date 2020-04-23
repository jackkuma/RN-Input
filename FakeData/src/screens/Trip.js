import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import blockStyles from '../styles/blockStyles'
import textStyles from '../styles/textStyles'

const MOCKED_DATA = [
  {
    id: '1',
    city: '東京',
    title: '夏日親子・輕井澤X迪士尼',
    summary: '有多久，沒有牽著孩子的手好好的帶他/她認識這個世界?在輕井澤騎著單車感受微風徐徐，努力工作外也要盡情享受人生；在充滿魔法的迪士尼中盡情歡笑，幸福快樂原來如此簡單。',
    photoUrl: 'https://image.freepik.com/free-photo/fireworks-tokyo-cityscape-night-japan_35076-3790.jpg',
    fee: '57900',
    lodging: '輕井澤 GREEN PLAZA',
    lodgeImg: 'https://www-image-cdn.abic.com.tw/photoDB/post/1446534235.jpg',
  },
  {
    id: '2',
    city: '東京',
    title: '古都鐮倉×東京・富士五湖輕划獨木舟',
    summary: '以纜車、遊船及鐵道等不同角度欣賞箱根自然美景，在水波中度過悠閒休日時光；慢步『箱根舊街道』石疊小徑、東京下町『谷中銀座』，感受老東京魅力。',
    photoUrl: 'https://image.freepik.com/free-photo/beautiful-landscape-mountain-fuji_74190-3065.jpg',
    fee: '62900',
    lodging: '箱根蘆之湖 皇家王子飯店',
    lodgeImg: 'https://r-cf.bstatic.com/images/hotel/max1280x900/142/142133509.jpg',
  },
  {
    id: '3',
    city: '四國',
    title: '四國千年物語列車・天空之鏡',
    summary: '無比親切的風土人情與悠緩的生活步調成為這片土地闡述自己的方式，這裡總是可以找到許多為「生活」加分的註腳。',
    photoUrl: 'https://image.freepik.com/free-photo/yasaka-pagoda-traditional-street-kyoto_44891-10.jpg',
    fee: '58900',
    lodging: 'JR HOTEL CLEMENT 高松',
    lodgeImg: 'https://www.jrhotelgroup.com/img/142/1.jpg',
  },
  {
    id: '4',
    city: '九州',
    title: '九州親子豪華露營',
    summary: '九州人氣景點 ◆熊本熊廣場「KUMAMON SQUARE」 ◆溫泉童話村「由布院」 ◆ 牛奶牧場DIY冰淇淋體驗。',
    photoUrl: 'https://image.freepik.com/free-photo/asian-boy-golden-melon-organic-greenhouse_44602-78.jpg',
    fee: '53900',
    lodging: 'ANA Crowne Plaza 熊本',
    lodgeImg: 'https://pic.pimg.tw/nigi33kimo/1538276038-1230894154.jpg',
  },
  {
    id: '5',
    city: '北海道',
    title: '楓彩映紅大地的盡頭知床．層雲峽',
    summary: '紅葉美在時而赭紅、時而黃澄、時而翠綠，彼此交疊襯托美不勝收。錯開人滿為患的賞楓旺季，早一步出發，少一分擁擠就多一分自在。',
    photoUrl: 'https://image.freepik.com/free-photo/young-japanese-girl-traveller-traditional-kimino-dress-standing-digoji-temple-with-red-pagoda-red-maple-leaf-autumn-season-kyoto-japan_73503-1808.jpg',
    fee: '54900',
    lodging: '星野度假村 TOMAMU',
    lodgeImg: 'https://www.snowtomamu.jp/winter/cn/hotel/tower/images/index_key.jpg',
  },
  {
    id: '6',
    city: '福島',
    title: '傳承千年傳統節慶巡禮',
    summary: '外行人看熱鬧，內行人看門道！跟著達人的腳步，循著達人口袋名單的秘密路線，探訪與眾不同的私房行程！',
    photoUrl: 'https://image.freepik.com/free-photo/young-girl-wearing-japanese-kimono-standing-front-sensoji-temple-tokyo_24901-999.jpg',
    fee: '50900',
    lodging: '仙台蒙特利飯店',
    lodgeImg: 'https://pic.pimg.tw/tloveq/1503758059-3723557646_l.jpg',
  },
  {
    id: '7',
    city: '九州',
    title: '移動行宮九州七星(ななつ星in九州)',
    summary: '搭載夢想，開啟視野的驚喜，延伸出獨特的旅行樂章，烙印無限的回憶，原來旅行腳步可以這麼不同！',
    photoUrl: 'https://image.freepik.com/free-photo/japan-landscape-scenic-view-tohoku-train-with-full-bloom-sakura-cherry-blossom_1439-189.jpg',
    fee: '255000',
    lodging: 'Cruise Train Suite Room',
    lodgeImg: 'https://i.pinimg.com/736x/f4/c6/63/f4c663aa060e66433aa1b5a6d469f0c3.jpg',
  },
  {
    id: '8',
    city: '青森',
    title: '青森食旅．跟著漁師出海捕魚',
    summary: '日本四季分明，飲食文化是利用當季食材發展出各式特色料理，讓一道道美味佳餚，在旅途中滿足你的味蕾享受。',
    photoUrl: 'https://image.freepik.com/free-photo/mixed-sashimi-set_1203-9299.jpg',
    fee: '68900',
    lodging: '八戶 DAIWA ROYNET 飯店',
    lodgeImg: 'https://pix4.agoda.net/hotelimages/400/400295/400295_15073006450033309547.jpg',
  },
]

export default function TripScreen(props) {
  // const [city, setCity] = useState('Taipei')
  // const changeCity = (getCity) => setCity(getCity)
  const [dataSource, setDataSourse] = useState([])

  useEffect(() => {
    let sights = MOCKED_DATA
    setDataSourse(sights)
  })

  const showSlightDetail = (cards) => {
    props.navigation.push('TripDetail',{passProps:cards})
  }

  const renderSligts = (cards) => {
    return(
      <TouchableOpacity onPress={() => showSlightDetail(cards)}>
        <View>
          <View style={blockStyles.cardView}>
            <Image style={blockStyles.photoImage} source={{uri: cards.photoUrl}} />
            <View style={{ flex: 3, padding: 10 }}>
              <Text style={[textStyles.cityName, {fontSize: 26}]}>{cards.city}</Text>
              <Text style={textStyles.subject}>{cards.title}</Text>
            </View>
            <View style={styles.more}>
              <FontAwesome5 name={'angle-right'} size={35} color={'#84a9ac'} solid />
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
        renderItem={cards => renderSligts(cards.item)}
        keyExtractor={cards => cards.id}
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
  more: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});