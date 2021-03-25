import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ResturantsScreen, OderDeliverScreen, PostsScreen} from '../screens';
import Tabs from './bottomtab/Tabs';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Resturant" component={ResturantsScreen} />
        <Stack.Screen name="OrderDelivery" component={OderDeliverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
