import React from 'react';

import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {MainHeader} from '../../components/layout/HeaderBack';
import tw from 'twrnc';

import Vegetables from '../../assets/svgs/vegetables.svg';
import Plus from '../../assets/svgs/plus.svg';
import image1 from '../../assets/pngs/image1.png';
import image2 from '../../assets/pngs/image2.png';
import image3 from '../../assets/pngs/image3.png';
import image4 from '../../assets/pngs/image4.png';
import image5 from '../../assets/pngs/image5.png';
import image6 from '../../assets/pngs/image6.png';
import {IProps} from '../../interface/components-props';

const data = [
  {
    id: '1',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '1kg',
    image: image1,
  },
  {
    id: '2',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '4kg',
    image: image2,
  },
  {
    id: '3',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '2kg',
    image: image3,
  },
  {
    id: '7',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '2kg',
    image: image3,
  },
  {
    id: '4',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '0.5kg',
    image: image4,
  },
  {
    id: '5',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '6kg',
    image: image5,
  },
  {
    id: '6',
    title: 'Bell Pepper Red',
    price: '100',
    weight: '3kg',
    image: image6,
  },
];

const Items = (props: IProps) => {
  return (
    <View style={tw`bg-white h-full`}>
      <MainHeader
        goBack={() => props.navigation.goBack()}
        showSearch={true}
        title={
          <View style={tw`flex-row justify-center items-center`}>
            <View>
              <Text style={tw`text-black text-lg font-bold`}> Vegetables </Text>
            </View>
            <View>
              <Vegetables />
            </View>
          </View>
        }
      />

      <FlatList
        style={tw`py-2 px-4 `}
        data={data}
        renderItem={({item}) => (
          <OneItem navigation={props.navigation} {...item} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id}
      />
    </View>
  );
};

export default Items;

const OneItem = (props: any) => {
  return (
    <View style={tw`  bg-white w-1/2`}>
      <View style={tw`mx-2 rounded-4 my-2  bg-gray-100  p-3`}>
        <View style={tw`h-[98px] items-center w-full justify-center`}>
          <Image style={{resizeMode: 'center'}} source={props.image} />
        </View>
        <View style={tw``}>
          <Text style={tw`text-base text-black pt-2 pb-1`}> {props.title}</Text>

          <View style={tw`flex-row justify-between`}>
            {/* <Text></Text> */}
            <Text style={tw`text-red-600  text-base font-bold`}>
              {props.weight}, {props.price}$
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('ItemDetails')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
