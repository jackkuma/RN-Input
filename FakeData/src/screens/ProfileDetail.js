import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import textStyles from '../styles/textStyles'
import formStyles from '../styles/formStyles'
import blockStyles from '../styles/blockStyles'

export default function ProfileDetail(props) {
  const nickName = props.route.params.myNickName || 'Guest'
  
  return (
    <View style={styles.container}>
      <Text style={[textStyles.word, {marginLeft: 10}]}>Hello, {nickName}  您近期的行程有:</Text>
      <View>
        <View style={blockStyles.cardView}>
          <Image style={blockStyles.photoImage} source={{uri:'https://image.freepik.com/free-photo/young-japanese-girl-traveller-traditional-kimino-dress-standing-digoji-temple-with-red-pagoda-red-maple-leaf-autumn-season-kyoto-japan_73503-1808.jpg'}} />
          <View style={{ flex: 3, padding: 10 }}>
            <Text style={textStyles.cityName}>楓彩映紅大地的盡頭知床．層雲峽</Text>
            <Text style={textStyles.subject}>2020年11月16日 - 11月21日</Text>
            <Text style={textStyles.subject}>高雄 ⇌ 札幌</Text>
          </View>
        </View>
        <View style={blockStyles.seperator} />
      </View>
      <View>
        <View style={blockStyles.cardView}>
          <Image style={blockStyles.photoImage} source={{uri:'https://image.freepik.com/free-photo/fireworks-tokyo-cityscape-night-japan_35076-3790.jpg'}} />
          <View style={{ flex: 3, padding: 10 }}>
            <Text style={textStyles.cityName}>夏日親子・輕井澤X迪士尼</Text>
            <Text style={textStyles.subject}>2021年6月15日 - 6月20日</Text>
            <Text style={textStyles.subject}>高雄 ⇌ 東京</Text>
          </View>
        </View>
        <View style={blockStyles.seperator} />
      </View>
      <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.pop()}>
        <Text style={styles.backText}><FontAwesome5 name={'angle-double-left'} size={16} color={'#204051'} /> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backBtn: {
    backgroundColor: '#84a9ac',
    padding: 10,
    height: 52,
  },
  backText: {
    fontSize: 18,
    fontWeight: '600',
  }
});
