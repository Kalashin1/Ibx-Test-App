import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {DetailsProps} from '..';
import styles from '../styles';

type HeaderProps = {
  coverImage: any;
  navigation: DetailsProps['navigation'];
};

const Header: React.FC<HeaderProps> = ({coverImage, navigation}) => {
  const [image, updateCoverImage] = React.useState('');
  React.useEffect(() => {
    updateCoverImage(coverImage);
    console.log('image');
  }, [coverImage]);

  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.backButton}>
            <Icon name="chevron-left" color="#000" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {image && (
            <Image
              style={styles.image}
              source={require('../../../../assets/images/Frame 32 (1).png')}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
