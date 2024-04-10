import {View, Text, Button} from 'react-native';
import React from 'react';
import Props from '../(components)/button/Button';
interface Detail {
  navigation: any;
}

export default function HomeScreen(props: Detail) {
  return (
    <View>
      <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        HomeScreen 1
      </Text>
      <Button
        title="Home Page Move"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Props name="click me" />
    </View>
  );
}
