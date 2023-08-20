import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../styles';

type HeaderProps = {
  coverImage: any;
};

const Header: React.FC<HeaderProps> = ({ coverImage }) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity>
          <View style={styles.backButton}>
              <Icon name="chevron-left" color="#000" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={coverImage} />
        </View>
      </View>
    </View>
  );
};

export default Header;
