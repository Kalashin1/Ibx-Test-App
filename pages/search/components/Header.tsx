import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';


const Header: React.FC = () => {
  const [searchTerm, updateSearchTerm] = React.useState('');


  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChange={updateSearchTerm}
          placeholder="Dodgecoin to the moon"
        />
        <View style={styles.searchIconContainer}>
          <Icon name="times" color="#000" size={30} />
        </View>
      </View>
    </View>
  );
};

export default Header;
