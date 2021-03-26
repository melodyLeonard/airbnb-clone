/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../Constants';

const ICON_SIZE: number = 30;

type Props = {
  location: string;
  leftIcon: ImageSourcePropType;
  rightIcon: ImageSourcePropType;
};

export const RenderHeader = ({leftIcon, rightIcon, location}: Props) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={leftIcon}
          resizeMode="contain"
          style={{width: ICON_SIZE, height: ICON_SIZE}}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3}}>{location}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={rightIcon}
          resizeMode="contain"
          style={{width: ICON_SIZE, height: ICON_SIZE}}
        />
      </TouchableOpacity>
    </View>
  );
};
