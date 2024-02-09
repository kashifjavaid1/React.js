import { View, Text, Button } from 'react-native'
import React from 'react'
interface butt{
    navigation:any
}

export default function HomeScreen(props:butt) {
  return (
    <View>
      <Text style={{flex:1, justifyContent:'center',alignItems:'center'}}>HomeScreen 1</Text>
      <Button title='Detail Page Move' onPress={()=>props.navigation.navigate('Detail')}/>
    </View>
  )
}