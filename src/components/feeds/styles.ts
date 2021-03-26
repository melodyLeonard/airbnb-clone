import {ImageStyle, StyleSheet, ViewStyle, TextStyle} from 'react-native';
// import {Colors} from '../../Constants/Colors';
import {SIZES} from '../../Constants/theme/Sizes';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  prices: TextStyle;
  oldPrice: TextStyle;
  newPrice: TextStyle;
  totalPrice: TextStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  prices: {
    fontSize: SIZES.lg_FONT,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#686868',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#686868',
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: SIZES.lg_FONT,
    lineHeight: 26,
  },
  title: {
    marginVertical: 10,
    color: '#686868',
  },
});

export default styles;
