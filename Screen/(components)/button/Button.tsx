import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const props = (props: any) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default props;
