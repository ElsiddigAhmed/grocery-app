import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MainHeader} from '../../components/layout/HeaderBack';
import {IProps} from '../../interface/components-props';
import tw from 'twrnc';
import Map from '../../assets/svgs/map-checkout.svg';
import Time from '../../assets/svgs/time.svg';
import Phone from '../../assets/svgs/phone.svg';
import Msg from '../../assets/svgs/msg.svg';
import Store from '../../assets/svgs/store.svg';
import Location from '../../assets/svgs/location.svg';
import userImage from '../../assets/pngs/user.png';
const Checkout = (props: IProps) => {
  return (
    <View style={tw`bg-blue-100 h-full`}>
      <MainHeader
        style={'absolute'}
        goBack={() => props.navigation.goBack()}
        showSearch={false}
        title={null}
      />
      <View style={tw`z-0 absolute`}>
        <Map />
      </View>
      <View style={tw`z-10 h-full flex justify-end`}>
        <View style={tw`bg-white  rounded-tl-10 rounded-tr-10 px-6 py-2`}>
          <View style={tw`p-2  justify-center items-center`}>
            <View style={tw`w-[60px] rounded-10 h-[5px] bg-gray-300`} />
          </View>
          <View style={tw`mt-4`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-[24px] text-black font-bold`}>
                On the way
              </Text>
              <View
                style={tw`border-2 flex-row border-gray-100 rounded-5 px-2 py-2`}>
                <Time />

                <Text style={tw`text-[12px] mx-1 text-black`}> 10 Mins</Text>
              </View>
            </View>

            <View style={tw`flex-row my-4 justify-between items-center`}>
              <View style={tw` flex-1 items-center px-1`}>
                <Text>Order placed</Text>
                <View
                  style={tw`w-full h-[4px] overflow-hidden my-1 bg-green-600 rounded-4`}
                />
              </View>
              <View style={tw` flex-1 items-center px-1`}>
                <Text>On the way</Text>
                <View
                  style={tw`w-full h-[4px] overflow-hidden my-1 bg-gray-300 rounded-4`}>
                  <View style={tw`w-1/2 h-[4px] bg-green-600`} />
                </View>
              </View>
              <View style={tw` flex-1 items-center px-1`}>
                <Text>Delivered</Text>
                <View
                  style={tw`w-full h-[4px] overflow-hidden my-1 bg-gray-300 rounded-4`}
                />
              </View>
            </View>
            <View style={tw`flex-row my-2 justify-between items-center`}>
              <View style={tw` flex-row`}>
                <View
                  style={tw`bg-blue-100 items-center justify-end overflow-hidden w-[40px] h-[40px] rounded-full`}>
                  <Image
                    style={{...tw` w-[35px] h-[35px]`}}
                    source={userImage}
                  />
                </View>
                <View style={tw`px-3`}>
                  <Text style={tw`text-[14px] text-gray-500`}>
                    Your delivery hero
                  </Text>
                  <Text style={tw`text-[14px] text-black font-bold`}>
                    Abdulmalik Qasim
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row`}>
                <View
                  style={tw`bg-slate-100  mx-2 w-[40px] h-[40px] justify-center items-center rounded-full`}>
                  <Msg />
                </View>
                <View
                  style={tw`bg-slate-100 w-[40px] h-[40px] justify-center items-center rounded-full`}>
                  <Phone />
                </View>
              </View>
            </View>
            <View style={tw``}>
              <View
                style={tw`w-[97%] h-[1px] right-0 border-b-2 border-gray-100 border-dashed absolute top-[50%]`}
              />
              <View
                style={tw`h-[50%] w-[1px] left-[10px] border-l-2 border-gray-100 border-dashed absolute top-[25%]`}
              />
              <View style={tw`flex-row items-center py-3 `}>
                <View style={tw``}>
                  <Store />
                </View>
                <View style={tw`px-4`}>
                  <Text style={tw`text-[14px]`}>Store</Text>
                  <Text style={tw`text-[16px] text-black font-bold`}>
                    Insta Grocery Store
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row items-center  py-3`}>
                <View style={tw``}>
                  <Location />
                </View>
                <View style={tw`px-4`}>
                  <Text style={tw`text-[14px]`}>Your place</Text>
                  <Text style={tw`text-[16px] text-black font-bold`}>
                    Queens Road London
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
