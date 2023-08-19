import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

type NewsText = {
  content: string;
}

const NewsText: React.FC<NewsText> = ({
  content
}) => {
  return (
    <View>
      <Text>
        {content}
      </Text>
      <View>
        <Icon name="heart" size={25} color="red" />
        <Icon name="heart" size={15} color="blue" />
      </View>
    </View>
  );
};

export default NewsText;