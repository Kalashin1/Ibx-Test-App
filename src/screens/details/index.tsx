import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './components/Header';
import NewsText from './components/News-Text';
import {RootStackParamList, SCREEN_NAMES} from '../../navigation/constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.DETAIL
>;

const Details = ({navigation, route}: DetailsProps) => {
  const data = route.params;
  return (
    <SafeAreaView>
      <Header navigation={navigation} coverImage={data.urlToImage} />
      <View>
        <NewsText
          title={data.title}
          content={data.content}
          date={data.publishedAt}
          author={data.author}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
