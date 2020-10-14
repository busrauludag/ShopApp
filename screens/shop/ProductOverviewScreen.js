import React from 'react';
import { View, FlatList, Platform, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './../../components/UI/HeaderButton';
import ProductItem from './../../components/shop/ProductItem';
import * as cartActions from './../../store/actions/cart';

import Colors from './../../constants/colors';

const ProductOverwievScreen = props => {

  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    // props.navigation.navigate({ routeName: 'ProductDetail' });
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title
    });
  }

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
              onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title)
              }}
            >
              <Button
                color={Colors.primary}
                title='View Details'
                onPress={() => {
                  selectItemHandler(itemData.item.id, itemData.item.title)
                }}
              />
              <Button
                color={Colors.primary}
                title='To Cart'
                onPress={() => {
                  dispatch(cartActions.addToCart(itemData.item));
                }}
              />
            </ProductItem>
          )
        }}
      />
    </View>
  );
};


ProductOverwievScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName={Platform.OS == 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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
