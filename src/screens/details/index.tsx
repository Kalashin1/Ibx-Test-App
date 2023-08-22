import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './components/Header';
import NewsText from './components/News-Text';

const data = {
  content: `LONDON — Cryptocurrencies “have no intrinsic value” and people who invest in them should be prepared to lose all their money, Bank of England Governor Andrew Bailey said.

  Digital currencies like bitcoin, ether and even dogecoin have been on a tear this year, reminding some investors of the 2017 crypto bubble in which bitcoin blasted toward $20,000, only to sink as low as $3,122 a year later.

  Asked at a press conference Thursday about the rising value of cryptocurrencies, Bailey said: “They have no intrinsic value. That doesn’t mean to say people don’t put value on them, because they can have extrinsic value. But they have no intrinsic value.”

  “I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  coverImage: require('../../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg'),
  date: 'Sunday, 9 May 2021',
  title:
    'Crypto investors should be prepared to lose all their money, BOE governor says',
  author: 'Ryan Browne',
};

const Details: React.FC = () => {
  return (
    <SafeAreaView>
      <Header coverImage={data.coverImage} />
      <View>
        <NewsText
          title={data.title}
          content={data.content}
          date={data.date}
          author={data.author}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
