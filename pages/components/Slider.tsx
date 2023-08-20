import React from 'react';
import {View, Text,  Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';


const SliderInner = () => {

  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              {index}
            </Text>
          </View>
        )}
      />
  </View> 
  );
};


const Slider: React.FC = () => {

  return (
    <View>
      <View>
        <Text>Latest News</Text>
      </View>

      <View>
        <Text>See All</Text>
        <Icon name="long-arrow-right" size={20} color="#000" />
      </View>
      <SliderInner />
    </View>
  );
};

export default Slider;