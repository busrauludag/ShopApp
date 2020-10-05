import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductOverviewScreen from './../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from './../screens/shop/ProductDetailScreen';
import Orderscreen from './../screens/shop/Orderscreen';
import CartScreen from './../screens/shop/CartScreen';

import Colors from './../constants/colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
    fontSize: 16
  },
  headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary
};

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon: draverConfig => (
        <Ionicons 
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
          size={23}
          color={draverConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: Orderscreen
  },
  {
    navigationOptions: {
      drawerIcon: draverConfig => (
        <Ionicons 
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} 
          size={23}
          color={draverConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator
  },
  {
    contentOptions: {
      activetintColor: Colors.primary
    }
  }
);

export default createAppContainer(ShopNavigator);