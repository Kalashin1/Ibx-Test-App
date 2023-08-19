import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

type HeaderProps = {
  headerText?: string;
  showHeader?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  headerText = 'Header',
  showHeader = true
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="chevron-left" color="#000" size={30} />
      </View>
      { showHeader && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{headerText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    width: '80%'
  },
  text: {
    textAlign: 'center',
    color: 'rgba(255, 58, 68, 1)rgba(255, 128, 134, 1)',
    fontSize: 17,
    fontFamily: 'SFPRODISPLAYMEDIUM'
  },
});

export default Header;
