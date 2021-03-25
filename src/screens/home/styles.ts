import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SIZES} from '../../Constants/theme/Sizes';
import {COLORS} from '../../Constants/theme/Colors';

interface Styles {
  button: ViewStyle;
  searchButton: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  buttonText: TextStyle;
  searchButtonText: ViewStyle;
}

const marginLeft: number = 25;

const styles = StyleSheet.create<Styles>({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: COLORS.white,
    width: '70%',
    marginLeft: marginLeft,
  },
  button: {
    backgroundColor: COLORS.white,
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: marginLeft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: COLORS.white,
    width: SIZES.width - 20,
    height: 60,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingHorizontal: marginLeft / 1.2,
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: 50,
    zIndex: 1000,
  },
  searchButtonText: {
    marginLeft: marginLeft,
  },
});

export default styles;
