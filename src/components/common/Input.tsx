/**
 *
 * @format
 */

import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

interface Props {
  placeholder: string;
  type?: 'text';
  icon?: any;
  rightIcon?: any;
  style?: any;
  rightIconStyle?: any;
  pressRightIcon?: any;
}

export const Input = (props: Props) => {
  return (
    <View
      style={tw`px-2  flex-row overflow-hidden items-center bg-white  border-2 border-gray-200 rounded-10 flex ${props?.style}`}>
      <View style={tw`px-3 w-11  items-center justify-center`}>
        {props.icon}
      </View>
      <TextInput
        style={tw`bg-white py-3 px-0 grow `}
        placeholder={props.placeholder}
      />
      {props.rightIcon && (
        <TouchableOpacity
          onPress={props.pressRightIcon}
          style={tw`px-2 w-10 h-10 rounded-full items-center justify-center ${props.rightIconStyle}`}>
          {props.rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};
