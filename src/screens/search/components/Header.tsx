import React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
import {SearchProps} from '..';

const Header: React.FC<{
  navigation: SearchProps['navigation'];
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
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.searchIconContainer}>
            <Icon name="times" color="#000" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
