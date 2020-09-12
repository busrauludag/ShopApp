import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Colors from './../../constants/colors';

const ProductOverwievScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList />
    </View>
  );
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
