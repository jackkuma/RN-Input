import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard } from 'react-native';

export default function App() {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow')
    Keyboard.addListener('keyboardDidHide')
    return () => {
      Keyboard.removeListener('keyboardDidShow')
      Keyboard.removeListener('keyboardDidHide')
    }
  }, [])
  
  const [phoneNumber, setPhoneNumber] = useState('')
  const [validCode, setValidCode] = useState('')
  const [confirmCode, setConfirmCode] = useState('')

  const vaildKeyin = () => {
    if (phoneNumber.length == '') {
      return <Text style={styles.message}>請輸入手機號碼進行註冊</Text>
    } else if (phoneNumber.indexOf('09') == 0 && phoneNumber.length == 10) {
      return <Text style={[styles.message, styles.success]}>手機號碼格式正確</Text>
    } else {
      return <Text style={[styles.message, styles.warning]}>手機號碼輸入錯誤！</Text>
    }
  }
  const vaildCode = () => {
    if (confirmCode.length == '') {
      return <Text style={styles.message}>密碼檢核</Text>
    } else if (confirmCode == validCode) {
      return <Text style={[styles.message, styles.success]}>密碼確認正確</Text>
    } else {
      return <Text style={[styles.message, styles.warning]}>密碼有誤！</Text>
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.logo}>JK</Text>
        <Text style={styles.titleText}>會員註冊</Text>
        <Text>SING UP</Text>
      </View>
      <View style={styles.contentBox}>
        {vaildKeyin()}
        <TextInput
          style={styles.inputType}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          maxLength={10}
          placeholder='請輸入手機號碼'
          keyboardType='numeric'
          autoFocus={true}
          onSubmitEditing = {() => vaildKeyin()}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput
          style={styles.inputType}
          onChangeText={(text) => setValidCode(text)}
          value={validCode}
          maxLength={6}
          placeholder='請輸入密碼'
          keyboardType='default'
          secureTextEntry={true}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput
          style={styles.inputType}
          onChangeText={(text) => setConfirmCode(text)}
          value={confirmCode}
          maxLength={6}
          placeholder='再次輸入密碼'
          keyboardType='default'
          secureTextEntry={true}
          onSubmitEditing = {() => vaildCode()}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.footerBox}>
        <Text style={styles.message}>您的手機號碼為: {phoneNumber}</Text>
        {vaildCode()}
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
  titleBox: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#0fabbc',
    width: 320,
    padding: 10,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    width: 320,
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign: 'center',
  },
  footerBox: {
    padding: 20,
    textAlign: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000839',
    color: '#f3f3f3',
    fontSize: 30,
    fontWeight: '700',
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 60,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
  },
  message: {
    color: '#333',
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'center',
  },
  success: {
    color: '#21bf73',
  },
  warning: {
    color: '#fa163f',
  },
  inputType: {
    backgroundColor: '#f5f5f5',
    color: '#222',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
    height: 50,
    fontSize: 24,
  }
});
