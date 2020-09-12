import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from './../../components/shop/ProductItem';

import Colors from './../../constants/colors';

const ProductOverwievScreen = props => {

  const products = useSelector(state => state.products.availableProducts);

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
              onAddToCart={() => { }}
            />
          )
        }}
      />
    </View>
  );
};


ProductOverwievScreen.navigationOptions = {
  headerTitle: 'All Products'
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
