import React from 'react';
import { View, FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from './../../components/shop/ProductItem';
import * as cartActions from './../../store/actions/cart';
import HeaderButton from './../../components/UI/HeaderButton'

import Colors from './../../constants/colors';

const ProductOverwievScreen = props => {

  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        style={styles.listContainer}
        renderItem={itemData => {
          return (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              onViewDetail={() => {
                // props.navigation.navigate({ routeName: 'ProductDetail' });
                props.navigation.navigate('ProductDetail', {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title
                });
              }}
              onAddToCart={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          )
        }}
      />
    </View>
  );
};


ProductOverwievScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Cart'
          iconName={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => { 
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  listContainer: {
    width: '100%'
  }
});

export default ProductOverwievScreen;
