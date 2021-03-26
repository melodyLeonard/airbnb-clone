/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import {COLORS, icons} from '../../Constants';
import {OderDeliverScreen, PostsScreen, ResturantsScreen} from 'screens';
import TabBarCustomButton from './TabBarCustomButton';
import CustomTabBar from './CustomTabBar';

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Like: undefined;
  User: undefined;
};

const ICON_SIZE: number = 25;

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Like"
        component={ResturantsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="User"
        component={OderDeliverScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
