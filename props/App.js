import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SocialBtn from './src/components/Button/SocialButton'
import btnStyles from './src/styles/btnStyles'
import textStyle from './src/styles/textStyles'

export default function App() {
  
  const [socialName, setSocialName] = useState('')
  const [pressState, setPressState] = useState(false)
  const printBtn = (socialName) => {
    setSocialName(socialName)
    setPressState(true)
  }

  return (
    <ImageBackground style={{ flex: 1}}
     source={{uri:'https://img.freepik.com/free-photo/set-various-social-media-blocks-blue-painted-wall_23-2147841215.jpg'}}>
      <View style={styles.container}>
        <Text style={textStyle.title}>社群分享APP</Text>
        <Text>Share Now</Text>
        <View style={styles.shareBox}>
          <SocialBtn bgStyle={btnStyles.btn} bgColor={'#3C5A99'} textStyle={textStyle.socialText} checkTitle={'facebook'} checkPress={() => printBtn('facebook')} />
          <SocialBtn bgStyle={btnStyles.btn} bgColor={'#CF2872'} textStyle={textStyle.socialText} checkTitle={'Instagram'} checkPress={() => printBtn('Instagram')} />
          <SocialBtn bgStyle={btnStyles.btn} bgColor={'#3FA6DB'} textStyle={textStyle.socialText} checkTitle={'Twitter'} checkPress={() => printBtn('Twitter')} />
          <SocialBtn bgStyle={btnStyles.btn} bgColor={'#E00022'} textStyle={textStyle.socialText} checkTitle={'Pinterest'} checkPress={() => printBtn('Pinterest')} />
          <SocialBtn bgStyle={btnStyles.btn} bgColor={'#0274B3'} textStyle={textStyle.socialText} checkTitle={'LinkedIn'} checkPress={() => printBtn('LinkedIn')} />
          {pressState ? <Text style={textStyle.word}>您已分享到 {socialName} 囉~</Text> : <Text style={textStyle.word}>歡迎點擊分享</Text>}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareBox: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 18,
    padding: 10,
    marginTop: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
