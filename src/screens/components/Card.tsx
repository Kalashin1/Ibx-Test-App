import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import {News} from '../../store/services';

const Topics: React.FC<News> = ({author, title, publishedAt, urlToImage}) => {
  return (
    <View style={styles.cardsContainer}>
      <View>
        <Image style={styles.cardsImage} source={{uri: urlToImage}} />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTextTitle}>{title}</Text>
        <View style={styles.cardTextFooter}>
          <Text style={styles.cardTextAuthor}>{author}</Text>
          <Text style={styles.cardTextDate}>{publishedAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default Topics;
