import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

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
    <View style={styles.newsCardContainer}>
      <Image
        style={styles.image}
        source={image}
      />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {description}
          ...<Text style={styles.link}>Read More</Text>
          </Text>
        
      </View>
      <Text style={styles.author}>Published By {author}</Text>
    </View>
  );
};

export default NewsCard;
