/**
 *
 * @format
 */

import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

interface Props {
  text: any;
  style?: any;
  icon?: any;
  onPress?: any;
}

export const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={tw`rounded-10 p-4   bg-indigo-500 ${props?.style} flex flex-row`}>
      {props.icon && (
        <View style={tw` px-2 absolute top-1/2 left-4`}>{props.icon}</View>
      )}
      <View style={tw` grow`}>
        <Text style={tw`text-white text-base text-center`}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
