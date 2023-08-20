import React from 'react';
import {View, Text,  Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';
import SliderCard from './Slider-Card';
import styles from '../styles';

const SliderInner = () => {

  const width = Dimensions.get('window').width;

  return (
    <Carousel
      loop
      width={360}
      height={240}
      mode='parallax'
      modeConfig={{parallaxScrollingOffset: 20, parallaxAdjacentItemScale: .8}}
      data={[...new Array(3).keys()]}
      scrollAnimationDuration={500}
      // onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={({ index }) => (
        <SliderCard />
      )}
    /> 
  );
};


const Slider: React.FC = () => {

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderTextContainer}>
        <View>
          <Text style={styles.sliderHeading}>Latest News</Text>
        </View>

        <View style={styles.sliderTextContainer}>
          <Text style={styles.seeAll}>See All</Text>
          <Icon name="long-arrow-right" size={20} color="#0080FF" />
        </View>
      </View>
      <View style={styles.sliderInnerContainer}>
        <SliderInner /> 
      </View>
    </View>
  );
};

export default Slider;