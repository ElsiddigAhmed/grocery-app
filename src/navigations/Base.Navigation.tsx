/**
 *
 * @format
 */

import React from 'react';
import * as Screens from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {MainStackNavigation} from './Main.Navigation';

const Stack = createNativeStackNavigator();

const BaseNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={Screens.OnBoarding} />
      <Stack.Screen name="Items" component={Screens.Items} />
      <Stack.Screen name="Cart" component={Screens.Cart} />
      <Stack.Screen name="ItemDetails" component={Screens.ItemDetails} />
      <Stack.Screen name="Checkout" component={Screens.Checkout} />
      {/* <Stack.Screen name="MainStack" component={MainStackNavigation} /> */}
    </Stack.Navigator>
  );
};

export default BaseNavigation;
