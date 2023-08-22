import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import Carousel from 'react-native-reanimated-carousel';

const topics = [
  {active: true, text: 'Healthy'}, 
  {active: false, text: 'Technology'},
  {active: false, text: 'Finance'},
  {active: false, text: 'Arts'},
  {active: false, text: 'Politics'},
  {active: false, text: 'Religion'},
  {active: false, text: 'Sports'}
];


const Topics: React.FC = () => {
  return (
    <>
      <Carousel<{active: boolean, text: string}>
        loop
        width={360}
        height={50}
        visibleItems={3}
        mode='parallax'
        modeConfig={{parallaxScrollingOffset: 260,  parallaxAdjacentItemScale: .8}}
        autoPlay={true}
        data={topics}
        scrollAnimationDuration={500}
        renderItem={({index, item}) => (
          <View key={index} style={[styles.topic, item.active ? styles.activeTopic : {}]}>
            <Text style={item.active ? styles.activeTopicText: styles.topicText}>{item.text}</Text>
          </View>
        )}
      />
    </>
  );
};

export default Topics;