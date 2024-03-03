import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Navbar() {
  return (
    <View>
      <Text>Navbar</Text>
      <View>
        <TouchableOpacity>
          <Text>click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
