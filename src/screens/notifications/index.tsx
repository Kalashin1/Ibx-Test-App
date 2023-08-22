import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Header from './components/Header';
import NewsCard from './components/News-Card';
import styles from './styles';
import {RootStackParamList, SCREEN_NAMES} from '../../navigation/constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {newsApi, News} from '../../store/services';

export type NotificationProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.NOTIFICATIONS
>;

const Notification = ({navigation}: NotificationProps) => {
  const {data, isLoading} = newsApi.useGetAllNewsQuery('bitcoin');
  const [news, setNews] = React.useState<News[]>();

  React.useEffect(() => {
    if (!isLoading) {
      setNews(data?.articles);
    }
  }, [data?.articles, isLoading]);

  const gotoDetail = (d: News) => navigation.navigate(SCREEN_NAMES.DETAIL, d);
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} headerText="Hot Updates" />
        <View style={styles.container}>
          {news &&
            news?.map((d, i) => (
              <TouchableOpacity key={i} onPress={() => gotoDetail(d)}>
                <NewsCard
                  title={d.title}
                  date={d.publishedAt}
                  description={d.description}
                  author={d.author}
                  image={d.urlToImage}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
