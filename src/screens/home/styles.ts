import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {SIZES} from '../../Constants/Sizes';

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
    color: Colors.white,
    width: '70%',
    marginLeft: marginLeft,
  },
  button: {
    backgroundColor: Colors.white,
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
    backgroundColor: Colors.white,
    width: SIZES.sn_WIDTH - 20,
    height: 60,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {},
});

export default styles;
