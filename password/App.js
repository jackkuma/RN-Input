import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Keyboard, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import WifiImg from './src/images/wifi.png'
import OnlineImg from './src/images/online.png'

export default function App() {
  //鍵盤狀態監測
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow')
    Keyboard.addListener('keyboardDidHide')
    return () => {
      Keyboard.removeListener('keyboardDidShow')
      Keyboard.removeListener('keyboardDidHide')
    }
  }, [])
  
  const [validCode, setValidCode] = useState('')
  const [typeCode, setTypeCode] = useState(false)
  const [confirmCode, setConfirmCode] = useState(false)

  const wifiState = () => {
    //輸入密碼小於6位數 & 不是預設密碼 > 顯示錯誤訊息
    if(validCode.length <= 6 && validCode != '123123') {
      setTypeCode(true)
      setConfirmCode(false)
      //輸入密碼是預設密碼 > 顯示正確訊息及圖示亮起
    } else if(validCode == '123123') {
      setTypeCode(true)
      setConfirmCode(true)
    } else {
      setTypeCode(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30} >
        <View>
          {/* wifi連結狀態顯示判斷 */}
          {typeCode ? (confirmCode ?
          <Image style={styles.imgCenter} source={OnlineImg} /> : <Image style={styles.imgCenter} source={WifiImg} />)
          : <Image style={styles.imgCenter} source={WifiImg} />
          }
        </View>
        <Text style={styles.titleText}>Free Wifi</Text>
        <View style={styles.contentBox}>
          {/* 提示文字顯示判斷 */}
          {typeCode ? (confirmCode ?
          <Text style={[styles.message, {color: '#21bf73'}]}>密碼正確，已連結</Text>
            : <Text style={[styles.message, {color: '#fa163f'}]}>密碼有誤！無法連結</Text>)
            : <Text style={[styles.message, {color: '#0073b0'}]}>請輸入wifi密碼</Text>
          }
          
          <TextInput
            style={styles.inputType}
            onChangeText={(text) => setValidCode(text)}
            value={validCode}
            maxLength={6}
            placeholder='請輸入密碼'
            keyboardType='numeric'
            secureTextEntry={true}
            returnKeyLabel='Done'
            returnKeyType='done'
            onSubmitEditing={Keyboard.dismiss}
          />

          <TouchableOpacity style={styles.btn} onPress={() => wifiState()}>
            <Text style={styles.btnText}>輸入驗證</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    width: 320,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  titleText: {
    color: '#333',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 21,
    paddingTop: 10,
    textAlign: 'center',
  },
  inputType: {
    backgroundColor: '#f2f2f2',
    color: '#222',
    borderColor: '#ddd',
    borderWidth: 2,
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
    height: 50,
    fontSize: 24,
  },
  btn: {
    backgroundColor: '#0073b0',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 21,
    textAlign: 'center',
  },
  imgCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
