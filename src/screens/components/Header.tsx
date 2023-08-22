import React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../styles';
import {HomeProps} from '../';

const Header: React.FC<{
  navigation: HomeProps['navigation'];
}> = ({navigation}) => {
  const [searchTerm, updateSearchTerm] = React.useState<
    NativeSyntheticEvent<TextInputChangeEventData> | string
  >('');

  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchTerm as string}
          onChange={updateSearchTerm}
          placeholder="Dodgecoin to the moon"
        />
        <View style={styles.searchIconContainer}>
          <TouchableOpacity>
            <Icon name="search" color="#000" size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.notificationIconContainer}>
            <Icon name="bell" color="#fff" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
