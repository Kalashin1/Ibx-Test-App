import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {NotificationProps} from '..';
import styles from '../styles';

type HeaderProps = {
  headerText?: string;
  showHeader?: boolean;
  navigation: NotificationProps['navigation'];
};

const Header: React.FC<HeaderProps> = ({
  headerText = 'Header',
  showHeader = true,
  navigation,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-left" color="#000" size={30} />
        </TouchableOpacity>
      </View>
      {showHeader && (
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
