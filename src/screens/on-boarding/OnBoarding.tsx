import React from 'react';
import tw from 'twrnc';

import {Text, View, TouchableOpacity, Image} from 'react-native';
import image from '../../assets/pngs/image-intro.png';
import Image2 from '../../assets/svgs/intro.svg';
import Leafe from '../../assets/svgs/leafe.svg';
import Leafe2 from '../../assets/svgs/leafe-2.svg';
import Leafe3 from '../../assets/svgs/leafe-3.svg';
import {IProps} from '../../interface/components-props';

const Intro = (props: IProps) => {
  return (
    <View style={tw`h-full bg-white`}>
      <View style={tw`grow relative`}>
        <View style={tw`absolute top-[20px] right-5 `}>
          <Leafe3 />
        </View>
        <View style={tw`grow justify-center items-center`}>
          <View style={tw`m-4`}>
            <Image2 />
          </View>
          <View style={tw`mx-6 items-center`}>
            <Text style={tw`text-center w-[318px] text-[28px] my-3 text-black`}>
              Get your groceries delivered to your home
            </Text>
            <Text
              style={tw`text-center text-gray-500 text-[16px] my-3 w-[274px]`}>
              The best delivery app in town for delivering your daily fresh
              groceries
            </Text>
          </View>
          <View style={tw`my-5 relative items-center w-full`}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Items')}
              style={tw`bg-green-600 w-[190px]  my-3 mb-0 mt-0  py-4 rounded-10`}>
              <Text style={tw`text-white font-bold text-center text-[16px]`}>
                Shop now
              </Text>
            </TouchableOpacity>
            <View style={tw`absolute bottom-[-30px] right-0`}>
              <Leafe2 />
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`relative mt-10 w-full  relative items-center justify-center`}>
        <View style={tw`absolute top-[-20px] left-8 z-10`}>
          <Leafe />
        </View>
        <Image style={tw`w-full h-[350px]`} source={image} />
      </View>
    </View>
  );
};

export default Intro;
