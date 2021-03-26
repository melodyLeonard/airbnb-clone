import React from 'react';
import {Animated, Image, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './styles';

type Props = {
  item: {[key: string]: any};
  scale: any;
  opacity: any;
  onPress: any;
};

const Feed: React.FC<Props> = ({
  item,
  scale,
  opacity,
  onPress,
}: Props): JSX.Element => {
  return (
    <Animated.View style={[styles.container, {transform: [{scale}], opacity}]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>
        {`${item.bed} bed ${item.bedroom} bedroom`}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.type}. {item.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${item.oldPrice} </Text>
        <Text style={styles.newPrice}> ${item.newPrice}</Text> / text
      </Text>
      <Text style={styles.totalPrice}>${item.totalPrice} total</Text>
    </Animated.View>
  );
};

export default Feed;
