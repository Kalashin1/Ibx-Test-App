import React from 'react';
import Navigators from './src/navigation';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {newsApi} from './src/store/services';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <ApiProvider api={newsApi}>
      <Navigators />
    </ApiProvider>
  );
};

export default App;
