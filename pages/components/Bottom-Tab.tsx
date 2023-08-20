import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = () => {
  return (
    <View>
      
      <View>
        <Icon
          name="home"
          size={30}
          color="red"
        />
        <Text>Home</Text>
        <Icon
          name="heart-o"
          size={30}
          color="red"
        />
        <Text>Favorite</Text>
        <Icon
          name="user-o"
          size={30}
          color="red"
        />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default BottomTab;