import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

const filters = [
  {active: true, text: 'Filter'},
  {active: false, text: 'Technology'},
  {active: false, text: 'Finance'},
  {active: false, text: 'Arts'},
  {active: false, text: 'Politics'},
  {active: false, text: 'Religion'},
  {active: false, text: 'Sports'},
];

type Props = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type FilterProps = {
  item: (typeof filters)[number];
  index: number;
};

const Filter: React.FC<FilterProps> = ({index, item}) => {
  return (
    <View
      key={index}
      style={[
        styles.topic,
        styles.flex,
        item.text.toLowerCase() === 'filter' ? styles.activeTopic : {},
        item.text.toLowerCase() === 'filter' ? styles.spaceBetween : {},
      ]}>
      {item.text.toLowerCase() === 'filter' && (
        <Icon name="filter" color="#fff" size={20} />
      )}
      <Text
        style={
          item.text.toLowerCase() === 'filter'
            ? styles.activeTopicText
            : styles.topicText
        }>
        {item.text}
      </Text>
    </View>
  );
};

const Filters: React.FC<Props> = ({openModal}) => {
  return (
    <>
      <Carousel<{active: boolean; text: string}>
        loop
        width={360}
        height={50}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 260,
          parallaxAdjacentItemScale: 0.8,
        }}
        autoPlay={false}
        data={filters}
        scrollAnimationDuration={500}
        renderItem={({index, item}) => (
          <TouchableOpacity onPress={() => openModal(true)}>
            <Filter index={index} item={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default Filters;
