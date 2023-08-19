import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages';
import NotificationsPage from './pages/notifications';
import DetailsPage from './pages/details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="detailsPage" component={DetailsPage} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="notification" component={NotificationsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
