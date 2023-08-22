import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import {News} from '../../store/services';

const SliderCard: React.FC<News> = ({
  author,
  title,
  description,
  urlToImage,
}) => {
  return (
    <View>
      <Image style={styles.sliderImage} source={{uri: urlToImage}} />
      <View style={styles.sliderCard}>
        <Text style={styles.sliderAuthor}>by {author}</Text>
        <Text style={styles.sliderTitle}>{title}</Text>
        <Text style={styles.sliderQuote}>{description}</Text>
      </View>
    </View>
  );
};

export default SliderCard;
