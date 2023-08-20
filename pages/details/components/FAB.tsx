import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const FAB = () => {
  return (
    <View style={styles.fabContainer}>
      <Icon name="heart-o" size={30} color="#fff" />
    </View>
  );
};

export default FAB;
