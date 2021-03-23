import {Dimensions} from 'react-native';

type SizeType = {[key: string]: number};

export const SIZES: SizeType = {
  md_ICON: 25,
  sn_WIDTH: Dimensions.get('screen').width,
  sn_HEIGHT: Dimensions.get('screen').height,

  //----> font size
  xs_FONT: 10,
  sm_FONT: 14,
  md_FONT: 16,
  lg_FONT: 18,
};
