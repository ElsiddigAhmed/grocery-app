import React, {useState} from 'react';
import tw from 'twrnc';

import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MainHeader} from '../../components/layout/HeaderBack';
import Plus from '../../assets/svgs/plus.svg';
import Minutes from '../../assets/svgs/minutes.svg';
import Basket from '../../assets/svgs/basket.svg';
import image1 from '../../assets/pngs/image1.png';
import image2 from '../../assets/pngs/image2.png';
import image3 from '../../assets/pngs/image3.png';
import image4 from '../../assets/pngs/image4.png';
import {IProps} from '../../interface/components-props';

const Cart = (props: IProps) => {
  return (
    <View style={tw`bg-white h-full`}>
      <MainHeader
        showSearch={false}
        goBack={() => props.navigation.goBack()}
        title={
          <View style={tw`flex-row justify-center items-center`}>
            <View>
              <Text style={tw`text-black text-lg font-bold`}> Cart </Text>
            </View>
            <View>
              <Basket />
            </View>
          </View>
        }
      />
      <ScrollView>
        <CartItem image={image1} />
        <CartItem image={image2} />
        <CartItem image={image3} />
        <CartItem image={image4} />
      </ScrollView>

      <View style={tw`p-6`}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Checkout')}
          style={tw`bg-green-600 py-4 rounded-10`}>
          <Text style={tw`text-center text-[16px] font-bold text-white`}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface Props {
  image: any;
}

const CartItem = (props: Props) => {
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
    <View style={tw` px-6 flex-row border-b-2 border-gray-50 py-4 `}>
      <View style={tw` w-[45px]`}>
        <Image source={props.image} style={tw`w-[45px] h-[45px] `} />
      </View>
      <View style={tw` grow px-3`}>
        <Text style={tw`text-base text-black `}>Bell Pepper Red</Text>
        <Text style={tw`text-red-600 text-base font-bold`}>1kg, 8$</Text>
      </View>
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
  );
};

export default Cart;
