import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {MainHeader} from '../../components/layout/HeaderBack';
import tw from 'twrnc';

import Plus from '../../assets/svgs/plus.svg';
import Organic from '../../assets/svgs/organic.svg';
import Minutes from '../../assets/svgs/minutes.svg';
import image4 from '../../assets/pngs/image4.png';
import {IProps} from '../../interface/components-props';

const ItemDetails = (props: IProps) => {
  const [couter, setCounter] = useState(0);
  const increase = () => {
    setCounter(prev => {
      return prev + 1;
    });
  };
  const decrease = () => {
    if (couter <= 0) {
      return;
    }
    setCounter(prev => {
      return prev - 1;
    });
  };
  return (
    <View style={tw`bg-white h-full`}>
      <MainHeader
        goBack={() => props.navigation.goBack()}
        showSearch={true}
        style={`absolute`}
        title={null}
      />

      <View
        style={tw`w-full  overflow-hidden relative h-1/2 items-center justify-center`}>
        <Image source={image4} style={tw`z-10`} />
        <View
          style={tw`w-[800px] h-[800px] z-0 absolute  bottom-0 rounded-full  bg-gray-100`}
        />
      </View>
      <ScrollView style={tw` mt-5`}>
        <View>
          <View style={tw` px-6 flex-row justify-between py-2`}>
            <Text style={tw`text-[24px] text-black font-bold`}>
              Arabic Ginger
            </Text>
            <View style={tw`flex-row items-center `}>
              <TouchableOpacity onPress={decrease}>
                <Minutes />
              </TouchableOpacity>
              <View style={tw`w-[36px] h-[36px] items-center justify-center`}>
                <Text style={tw`text-black font-bold text-lg`}>{couter}</Text>
              </View>
              <TouchableOpacity onPress={increase}>
                <Plus />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`px-6`}>
            <Text style={tw`text-red-600 text-base font-bold`}>1kg, 8$</Text>
            <Text style={tw`py-2 text-gray-500`}>
              Ginger is a flowering plant whose rhizome, ginger root or ginger,
              is widely used as a spice and a folk medicine.
            </Text>
          </View>
          <View style={tw`my-2`}>
            <View style={tw`flex-row px-4 py-2`}>
              <Item icon={Organic} title={'100%'} subTitle={'Organic'} />
              <Item icon={Organic} title={'30 days'} subTitle={'Expiration'} />
            </View>
            <View style={tw`flex-row px-4 py-2`}>
              <Item icon={Organic} title={'4.8 (230)'} subTitle={'Reviews'} />

              <Item icon={Organic} title={'10 kg'} subTitle={'100 Gram '} />
            </View>
          </View>
          <View style={tw`px-6`}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Cart')}
              style={tw`bg-green-600 py-4 rounded-10`}>
              <Text style={tw`text-center text-[16px] font-bold text-white`}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemDetails;

const Item = props => {
  return (
    <View
      style={tw`border-2 flex-row flex-0.5 mx-2 p-3 rounded-3 border-gray-100`}>
      <View style={tw`items-center justify-center`}>
        <props.icon />
      </View>
      <View style={tw` grow px-2`}>
        <Text style={tw`text-green-500 text-[16px]`}>100%</Text>
        <Text style={tw`text-gray-400 text-[14px]`}>Organic</Text>
      </View>
    </View>
  );
};
