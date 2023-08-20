import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './components/Header';
import Slider from './components/Slider';
import Topics from './components/Topics';
import Card from './components/Card';
import BottomTab from './components/Bottom-Tab';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <Header />
           <Slider /> 
        </View>
        <View>
          <View style={styles.topicContainer}>
            <Topics />
          </View>
          <View>
          {
            [0, 1, 3].map((v, i) => (
              <Card key={i} />
            ))
          }
          </View>
        </View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};

export default Home;
