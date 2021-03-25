/* eslint-disable react-native/no-inline-styles */
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {COLORS} from 'Constants';
import React from 'react';
import {View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

const CustomTabBar = props => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        />
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

export default CustomTabBar;
