import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../styles'

type HeaderProps = {
  headerText?: string;
  showHeader?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  headerText = 'Header',
  showHeader = true
}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity>
          <Icon name="chevron-left" color="#000" size={30} />
        </TouchableOpacity>
      </View>
      { showHeader && (
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
      )}
    </View>
  );
};


export default Header;