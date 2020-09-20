import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from './../../constants/colors';

const CustomHeaderButton = () => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? Colors.white : Colors.primary}
    />
  );
};

export default CustomHeaderButton;
