import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import InputField from '../InputField/InputField';

const props = (props: any) => {
  return (
    <View>
      <InputField />
      <TouchableOpacity>
        <Text>{props}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default props;
