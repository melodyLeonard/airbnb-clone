import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {SIZES} from '../../Constants/theme/Sizes';
import {COLORS} from '../../Constants/theme/Colors';
import renderHeader from 'helpers/renderHeader';

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      {renderHeader}
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable style={styles.searchButton} onPress={() => {}}>
          <Fontisto name="search" size={SIZES.md_ICON} color={COLORS.danger} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
