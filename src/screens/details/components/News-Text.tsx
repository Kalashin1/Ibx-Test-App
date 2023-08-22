import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles';
import FAB from './FAB';

type NewsText = {
  content: string;
  date: string;
  title: string;
  author: string;
};

const NewsText: React.FC<NewsText> = ({content, date, title, author}) => {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>Published by {author}</Text>
      </View>
      <View style={styles.newsTextContainer}>
        <ScrollView>
          <Text style={styles.contentText}>{content}</Text>
        </ScrollView>
        <FAB />
      </View>
    </View>
  );
};

export default NewsText;
