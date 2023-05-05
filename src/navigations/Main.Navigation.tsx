import React from 'react';
// import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import * as Screens from '../screens';
import Bell from '../assets/svgs/message.svg';
import Wishlist from '../assets/svgs/heart-black.svg';

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Screens.Search} />
      <Stack.Screen name="SearchResult" component={Screens.SearchResult} />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      {/* <Tab.Screen name="Search" component={Search} /> */}
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {margin: 3},

          tabBarIcon: () => <Bell width={20} height={20} />,
        }}
        name="Home"
        component={Screens.Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: {margin: 3},

          tabBarIcon: () => <Wishlist width={20} height={20} />,
        }}
        name="Wishlist"
        component={Screens.Wishlist}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Booking',
          tabBarLabelStyle: {margin: 3},
          tabBarIcon: () => <Wishlist width={20} height={20} />,
        }}
        name="Booking"
        component={Screens.Booking}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Inbox',
          tabBarLabelStyle: {margin: 3},

          tabBarIcon: () => <Bell color="" width={20} height={20} />,
        }}
        name="Inbox"
        component={Screens.Inbox}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'User',
          tabBarLabelStyle: {margin: 3},

          tabBarIcon: () => <Bell color="" width={20} height={20} />,
        }}
        name="User"
        component={Screens.User}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
