import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image,  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'
import formStyles from '../styles/formStyles'

export default function GiftDetail(props) {
  const passProps = props.route.params.passProps || 'Nothing Get!'
  
  return (
    <View>
      <Text style={textStyles.storeText}>{passProps.ProduceOrg}</Text>
      <Image style={[blockStyles.sightView, {height:200}]} source={{uri: passProps.Column1}} />
      <Text style={[textStyles.productName, textStyles.giftName]}>{passProps.Name}</Text>
      <ScrollView style={[blockStyles.scroll, {height: 200}]} alwaysBounceVertical={true} keyboardDismissMode='on-drag'>
        <Text style={textStyles.summary}>規格: {passProps.SpecAndPrice}</Text>
        <View style={blockStyles.seperator} />
        <Text style={textStyles.summary}>{passProps.Feature}</Text>
      </ScrollView>
      <Text style={textStyles.item}><FontAwesome5 name={'info-circle'} size={18} color={'#75b79e'} /> 伴手禮資訊:</Text>
      <View style={blockStyles.info}>
        
        <Text style={textStyles.infoText}><FontAwesome5 name={'map-marker-alt'} size={15} /> 地址: {passProps.SalePlace}</Text>
        <Text style={textStyles.infoText}><FontAwesome5 name={'phone'} size={15} /> 電話: {passProps.ContactTel}</Text>
      </View>
      {/* <Button 
       title='go back'
       onPress={() => props.navigation.pop()}
      /> */}
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
});
