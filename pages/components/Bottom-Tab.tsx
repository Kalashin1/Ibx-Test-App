import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const BottomTab = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerNavItem}>
        <Icon
          name="home"
          size={25}
          color="red"
        />
        <Text>Home</Text>
      </View>
      <View style={styles.footerNavItem}>
        <Icon
          name="heart-o"
          size={25}
          color="red"
        />
        <Text>Favorite</Text>
      </View>
      <View style={styles.footerNavItem}>
        <Icon
          name="user-o"
          size={25}
          color="red"
        />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default BottomTab;