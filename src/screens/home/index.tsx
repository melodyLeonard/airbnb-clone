import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {SIZES} from '../../Constants/Sizes';
import {Colors} from '../../Constants/Colors';

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable style={styles.searchButton} onPress={() => {}}>
          <Fontisto name="search" size={SIZES.md_ICON} color={Colors.danger} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
