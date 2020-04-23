import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { useMappedState, useDispatch } from 'redux-react-hook'
import { changeNickName } from '../redux/action'
import textStyles from '../styles/textStyles'
import formStyles from '../styles/formStyles'
import blockStyles from '../styles/blockStyles'

export default function ProfileScreen(props) {

  const [nickName, setNickName] = useState('Guest')
  const myNickName = useMappedState(state => state.nickName)
  const disPatch = useDispatch()

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow')
    Keyboard.addListener('keyboardDidHide')
    return () => {
      Keyboard.removeListener('keyboardDidShow')
      Keyboard.removeListener('keyboardDidHide')
    }
  }, [])

  const checkNickName = () => {
    if(nickName != 'Guest') {
      return <Text style={textStyles.word}>您的暱稱是: {myNickName}</Text>
    } else if(nickName === 'Guest') {
      return <Text style={textStyles.remarkText}>請設定暱稱</Text>
    }
  }

  return (
    <View style={styles.container}>
      {checkNickName()}
      <TextInput
       maxLength={10}
       style={[formStyles.input, {textAlign: 'center'}]}
       onChangeText={(text) => setNickName(text)}
       placeholder='請輸入暱稱'
      />
      <View style={blockStyles.btnArea}>
        <TouchableOpacity style={[formStyles.btn, {backgroundColor: '#315d7c'}]}
         onPress={() => disPatch(changeNickName(nickName))}>
          <Text style={textStyles.btnText}>設定暱稱</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[formStyles.btn, {backgroundColor: '#eb4559'}]}
         onPress={() => props.navigation.push('ProfileDetail', {myNickName})}>
          <Text style={textStyles.btnText}>檢視行程</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );ㄙ
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
