import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {DetailsProps} from '..';
import styles from '../styles';

type HeaderProps = {
  coverImage: any;
  navigation: DetailsProps['navigation'];
};

const Header: React.FC<HeaderProps> = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg')}
          />
        </View>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.backButton}>
            <Icon name="chevron-left" color="#000" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
