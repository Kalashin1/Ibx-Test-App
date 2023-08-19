import React from 'react';
import {View, Text, Image} from 'react-native';

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  author: string;
}

const NewsCard: React.FC<NewsCard> = ({
  image,
  date,
  title,
  description,
  author,
}) => {
  return (
    <View>
      <Image 
        source={image}
      />
      <Text>{date}</Text>
      <Text>{title}</Text>
      <View>
      <Text>{description}...</Text>
      <Text>Read More</Text>
      </View>
      <Text>{author}</Text>
    </View>
  );
};

export default NewsCard;
