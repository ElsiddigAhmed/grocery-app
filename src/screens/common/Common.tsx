import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import Heart from '../../assets/svgs/heart.svg';

interface Prop {
  image: any;
  title?: string;
  style?: any;
}

export const NearbyPlaces = (props: Prop) => {
  return (
    <TouchableOpacity
      style={tw`bg-white mr-5 rounded-5 overflow-hidden  w-[131px]`}>
      <View style={tw`bg-gray-300  h-[93px]`}>
        <Image style={tw`w-[130px] h-[93px] `} source={props.image} />
      </View>
      <View
        style={tw`bg-white p-2  rounded-5 rounded-t-0  border-2 border-t-0 border-gray-100`}>
        <Text style={tw`text-base  text-black`}>Places nearby</Text>
        <Text style={tw`text-sm  text-slate-500`}>5 km away</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TopRatedPlaces = (props: Prop) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-5 w-[258px] ${props?.style}`}>
      <View style={tw`bg-gray-300 rounded-3 overflow-hidden h-[150px]`}>
        <Image
          style={tw`w-[265px] h-[150px] ${props?.style}`}
          source={props.image}
        />
        <TouchableOpacity
          style={tw`w-[32px] h-[32px] opacity-60 items-center justify-center rounded-full bg-slate-600 z-10 absolute right-[8px] top-[8px]`}>
          <Heart width={18} height={18} />
        </TouchableOpacity>
      </View>
      <View style={tw` py-4 border-gray-100`}>
        <View style={tw`flex flex-row justify-between`}>
          <Text style={tw`text-[14px] text-orange-400`}>Studio</Text>
          <View>
            <Text
              style={tw`text-base text-black font-bold bg-gray-100 px-2 rounded-3`}>
              4.5 
            </Text>
          </View>
        </View>
        <Text style={tw`text-[16px] font-bold text-black my-0.5`}>
          Chic Studio in Business Bay
        </Text>
        <View style={tw`flex flex-row my-0.5`}>
          <Text style={tw`text-[14px] text-black`}>2 Bedroom •</Text>
          <Text style={tw`text-[14px] text-black`}> 1 Bathroom •</Text>
          <Text style={tw`text-[14px] text-black`}> 1 800 SQFT </Text>
        </View>
        <Text style={tw`text-[14px] text-black my-0.5`}>
          Dubai - Business Bay Cancel Center
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const BrowseByCategory = (props: Prop) => {
  return (
    <TouchableOpacity
      style={tw`border-2 w-[107px] h-[107px]  flex items-center justify-center border-gray-100 mr-5 rounded-4`}>
      <View style={tw` items-center  justify-center w-full h-1/2`}>
        <props.image />
        {/*  */}
      </View>
      <View style={tw`py-1`}>
        <Text style={tw`text-base text-black`}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
