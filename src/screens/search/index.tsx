import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Header from './components/Header';
import Filters from './components/Filters';
import styles from './styles';
import Card from '../components/Card';
import BottomModal from './components/Bottom-Modal';
import {newsApi, News} from '../../store/services';
import {RootStackParamList, SCREEN_NAMES} from '../../navigation/constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SearchProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.SEARCH
>;

const Search = ({navigation}: SearchProps) => {
  const [showModal, updateShowModal] = React.useState(true);
  const {data, isLoading} = newsApi.useGetAllNewsQuery('bitcoin');
  const [news, setNews] = React.useState<News[]>();

  React.useEffect(() => {
    if (!isLoading) {
      setNews(data?.articles);
    }
  }, [data?.articles, isLoading]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <Header navigation={navigation} />
        </View>
        <Filters openModal={updateShowModal} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>About 11,130,00 results for</Text>
          <Text style={styles.headingItalics}>COVID New Variant</Text>
        </View>
        <View style={{marginVertical: 16}}>
          {news && news.map((v, i) => <Card key={i} {...v} />)}
        </View>
      </ScrollView>
      {showModal && <BottomModal closeModal={updateShowModal} />}
    </SafeAreaView>
  );
};

export default Search;
