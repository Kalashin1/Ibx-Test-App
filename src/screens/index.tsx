import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './components/Header';
import Slider from './components/Slider';
import Topics from './components/Topics';
import Card from './components/Card';
import BottomTab from './components/Bottom-Tab';
import styles from './styles';
import {RootStackParamList, SCREEN_NAMES} from '../navigation/constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {newsApi, News} from '../store/services';

export type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.HOME
>;

const Home = ({navigation}: HomeProps) => {
  const {data, isLoading} = newsApi.useGetAllNewsQuery('bitcoin');
  const [news, setNews] = React.useState<News[]>();

  React.useEffect(() => {
    if (!isLoading) {
      setNews(data?.articles);
    }
  }, [data?.articles, isLoading]);
  return (
    <SafeAreaView style={styles.rootComponent}>
      <ScrollView>
        <View>
          <Header />
          {news && <Slider navigation={navigation} news={news} />}
        </View>
        <View>
          <View style={styles.topicContainer}>
            <Topics />
          </View>
          <View>
            {news ? news.map((v, i) => <Card key={i} {...v} />) : <></>}
          </View>
        </View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};

export default Home;
