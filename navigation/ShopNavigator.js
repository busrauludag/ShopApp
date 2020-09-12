import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import ProductOverviewScreen from './../screens/shop/ProductOverviewScreen';

import Colors from './../constants/colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);