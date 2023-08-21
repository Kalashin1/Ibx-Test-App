import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

const Topics: React.FC = () => {
  return (
    <View style={styles.cardsContainer}>
      <View>
        <Image
          style={styles.cardsImage}
          source={require('../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg')}
        />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTextTitle}>
          5 things to know about the 'conundrum' of lupus
        </Text>
        <View style={styles.cardTextFooter}>
          <Text style={styles.cardTextAuthor}>Matt Villano</Text>
          <Text style={styles.cardTextDate}>Sunday, 9 May 2021</Text>
        </View>
      </View>
    </View>
  );
};

export default Topics;
