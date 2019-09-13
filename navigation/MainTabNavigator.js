import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import BreakfastScreen from '../screens/BreakfastScreen';
import EggsScreen from '../screens/EggsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const BreakfastStack = createStackNavigator(
  {
    Breakfast: EggsScreen,
  },
  config
);

BreakfastStack.navigationOptions = {
  tabBarLabel: 'Eggs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

BreakfastStack.path = '';
////////////////////////////////////////
const BaconStack = createStackNavigator(
  {
    Bacon: BreakfastScreen,
  },
  config
);

BaconStack.navigationOptions = {
  tabBarLabel: 'Bacon',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

BaconStack.path = '';

///////////////////////////////////////////////

const DonutStack = createStackNavigator(
  {
    Donut: HomeScreen,
  },
  config
);

DonutStack.navigationOptions = {
  tabBarLabel: 'Donuts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

DonutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  BreakfastStack,
  BaconStack,
  DonutStack
});

tabNavigator.path = '';

export default tabNavigator;
