import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

const SliderCard: React.FC = () => {
	return (
    <View>
      <Image 
        style={styles.sliderImage}
        source={require('../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg')}
      />
      <View style={styles.sliderCard}>
        <Text style={styles.sliderAuthor}>by Ryan Browne</Text>
        <Text style={styles.sliderTitle}>
          Crypto investors should be prepared to lose all their money, BOE governor says
        </Text>
        <Text style={styles.sliderQuote}>
          “I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”
        </Text>
      </View>
    </View>
  );
};

export default SliderCard;
