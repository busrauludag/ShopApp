import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import ProductOverviewScreen from './../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from './../screens/shop/ProductDetailScreen';

import Colors from './../constants/colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
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
    }
  }
);

export default createAppContainer(ProductsNavigator);