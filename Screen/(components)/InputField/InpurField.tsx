import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function InpurField() {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => setText(text)}
        value={text}
        style={{padding: 10}}
      />
    </View>
  );
}
