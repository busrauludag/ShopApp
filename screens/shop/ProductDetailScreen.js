import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from './../../store/actions/cart';

import Colors from './../../constants/colors';

const ProductDetailScreen = props => {

  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: selectedProduct.imageUrl }}
          />
          <View style={styles.actions}>
            <Button color={Colors.primary} title='Add To Cart' 
              onPress={() => {
                dispatch(cartActions.addToCart(selectedProduct)); 
              }} 
            />
          </View>
          <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};


ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.darkGrey,
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailScreen;
