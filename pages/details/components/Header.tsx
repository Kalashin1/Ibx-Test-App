import React from 'react'
import {View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

type HeaderProps = {
  coverImage: any;
  date: string;
  title: string;
  author: string;
} 

const Header: React.FC<HeaderProps> = ({
  coverImage,
  date,
  title,
  author,
}) => {
  return (
    <View>
      <View>
        <Icon name="chevron-left" color="#000" size={30} />
      </View>
      <View>
        <Image
          source={coverImage} 
        />
      </View>
      <View>
        <Text>{date}</Text>
        <Text>
          {title}
        </Text>
        <Text>
          Published by {author}
        </Text>
      </View>
    </View>
  );
};

export default Header;