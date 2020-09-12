import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from './../../constants/colors';

const ProductOverwievScreen = () => {

  const products = useSelector(state => state.products.availableProducts);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => {
          return (
            <Text>{itemData.item.title}</Text>
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
});

export default ProductOverwievScreen;
