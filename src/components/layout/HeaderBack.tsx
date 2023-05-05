/**
 *
 * @format
 */

import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import tw from 'twrnc';
import ArrowBack from '../../assets/svgs/arrow-back.svg';
import Search from '../../assets/svgs/search.svg';
// import Filter from '../../assets/svgs/setting.svg';
interface Props {
  goBack?: any;
  title?: any;
  style?: any;
  onFilterPressed?: any;
  showSearch?: boolean;
}

export const MainHeader = (props: Props) => {
  return (
    <View style={tw` flex flex-row  px-6 justify-between z-100 ${props.style}`}>
      <TouchableOpacity onPress={props?.goBack} style={tw` py-5 flex-1 `}>
        <ArrowBack width={44} height={44} />
      </TouchableOpacity>

      {props.title && (
        <View
          style={tw`py-1  flex-1 justify-center items-center right-0 flex-row`}>
          <Text
            style={tw`text-black text-lg font-bold items-center justify-center `}>
            {props.title}
          </Text>
        </View>
      )}
      <View style={tw`flex-1 `}>
        {props.showSearch && (
          <TouchableOpacity
            onPress={props?.onFilterPressed}
            style={tw`py-1 flex-1 items-center justify-end right-0 flex-row`}>
            {/* <Filter style={tw`text-orange-500`} /> */}
            <Search width={44} height={44} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
