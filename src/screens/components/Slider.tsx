import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';
import SliderCard from './Slider-Card';
import styles from '../styles';
import {SCREEN_NAMES} from '../../navigation/constants';
import {News} from '../../store/services';
import {HomeProps} from '../';

const SliderInner = ({
  data,
  navigation,
}: {
  data: News[];
  navigation: HomeProps['navigation'];
}): JSX.Element => {
  const width = Dimensions.get('window').width * 0.948;
  return (
    <Carousel<News>
      loop
      width={width}
      height={width / 1.5}
      mode="parallax"
      modeConfig={{parallaxScrollingOffset: 20, parallaxAdjacentItemScale: 0.8}}
      data={data}
      scrollAnimationDuration={500}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN_NAMES.DETAIL, item)}>
          <SliderCard {...item} />
        </TouchableOpacity>
      )}
    />
  );
};

const Slider: React.FC<{
  navigation: HomeProps['navigation'];
  news: News[];
}> = ({navigation, news}) => {
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
        {<SliderInner navigation={navigation} data={news} />}
      </View>
    </View>
  );
};

export default Slider;
