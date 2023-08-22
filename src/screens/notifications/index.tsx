import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import Header from './components/Header';
import NewsCard from './components/News-Card'
import styles from './styles';
const data = [
  {
    image: require('../../../assets/images/Frame 32 (1).png'),
    date: 'Monday, 10 May 2021',
    title: 'WHO classifies triple-mutant Covid variant from India as global health risk',
    description: 'A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a',
    author: 'Berkeley Lovelace Jr.',
  },
  {
    image: require('../../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg'),
    date: 'Monday, 10 May 2021',
    title: 'WHO classifies triple-mutant Covid variant from India as global health risk',
    description: 'A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a',
    author: 'Berkeley Lovelace Jr.'
  }
]

const Notification: React.FC = ({
  
}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header headerText="Hot Updates" />
        <View style={styles.container}>
          {data.map((d, i) => (
            <NewsCard
              key={i}
              title={d.title}
              date={d.date}
              description={d.description}
              author={d.author}
              image={d.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;