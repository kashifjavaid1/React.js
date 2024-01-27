import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
interface Detail{
    navigation:any
}
export default function Login(props:Detail) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>Login Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{ fontSize: 20, color: 'black',  backgroundColor:'red'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
