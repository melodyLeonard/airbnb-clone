import Feed from 'components/feeds';
import {icons, SIZES} from 'Constants';
import {RenderHeader} from 'helpers/renderHeader';

import React from 'react';
import {Animated, SafeAreaView, StatusBar} from 'react-native';
// import Animated from 'react-native-reanimated';
import {feedData} from '../../assets/data/feed';

const PostsScreen: React.FC = ({navigation}): JSX.Element => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = SIZES.height / 1.8;
  const onNav = () => {
    navigation.navigate('Resturant');
  };

  return (
    <SafeAreaView style={{paddingBottom: SIZES.padding * 8}}>
      <RenderHeader
        leftIcon={icons.nearby}
        rightIcon={icons.basket}
        location={'location'}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Feed onPress={onNav} opacity={opacity} scale={scale} item={item} />
          );
        }}
        data={feedData}
        inverted={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || SIZES.padding * 2,
        }}
      />
    </SafeAreaView>
  );
};

export default PostsScreen;
