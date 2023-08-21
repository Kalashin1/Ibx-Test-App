import React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const Header: React.FC = () => {
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
          <Icon name="times" color="#000" size={30} />
        </View>
      </View>
    </View>
  );
};

export default Header;
