import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './components/Header';
import Slider from './components/Slider';
import Topics from './components/Topics';
import Card from './components/Card';
import BottomTab from './components/Bottom-Tab';
import BottomModal from './components/Bottom-Modal';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
          <Slider />
        </View>
        <View>
          <Topics />
          <Card />
        </View>
        <BottomTab />
        <BottomModal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
