import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const Header: React.FC = () => {
  const [searchTerm, updateSearchTerm] = React.useState('');


  return (
    <View>
      <View>
        <TextInput
          value={searchTerm}
          onChange={updateSearchTerm}
          placeholder="useless placeholder"
        />
      </View>
      <View>
        <Icon name="chevron-left" color="#000" size={10} />
      </View>
      <View>
        <View>
          <Icon name="bell" color="#000" size={10} />
        </View>
      </View>
    </View>
  );
};

export default Header;
