import React from 'react';
import {View, Text} from 'react-native';

const topics = ['Healthy', 'Technology', 'Finance', 'Arts'];

const Topics: React.FC = () => {
  return (
    <>
      {topics.map((topic, index) => (
        <View key={index}>
          <Text>{topic}</Text>
        </View>
      ))}
    </>
  );
};

export default Topics;