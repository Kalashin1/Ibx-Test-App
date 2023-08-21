import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages';
import NotificationsPage from './pages/notifications';
import DetailsPage from './pages/details';
import SearchPage from './pages/search';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="search" component={SearchPage} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="detailsPage" component={DetailsPage} />
        <Stack.Screen name="notification" component={NotificationsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
