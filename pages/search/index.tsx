import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Header from './components/Header';
import Filters from './components/Filters';
import styles from './styles';
import Card from '../components/Card';
import BottomModal from './components/Bottom-Modal';

const Search: React.FC = () => {
  const [showModal, updateShowModal] = React.useState(true);
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <Header />
        </View>
        <Filters openModal={updateShowModal} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>About 11,130,00 results for</Text>
          <Text style={styles.headingItalics}>COVID New Variant</Text>
        </View>
        <View style={{marginVertical: 16}}>
          {[0, 1, 3, 4, 2].map((v, i) => (
            <Card key={i} />
          ))}
        </View>
      </ScrollView>
      {showModal && <BottomModal closeModal={updateShowModal} />}
    </SafeAreaView>
  );
};

export default Search;
