import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, SCREEN_NAMES} from './constants';
import HomePage from '../screens';
import NotificationsPage from '../screens/notifications';
import DetailsPage from '../screens/details';
import SearchPage from '../screens/search';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomePage} />
        <Stack.Screen name={SCREEN_NAMES.SEARCH} component={SearchPage} />
        <Stack.Screen name={SCREEN_NAMES.DETAIL} component={DetailsPage} />
        <Stack.Screen
          name={SCREEN_NAMES.NOTIFICATIONS}
          component={NotificationsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
