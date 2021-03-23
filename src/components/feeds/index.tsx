import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

type Props = {
  [key: string]: any;
};

const Feed: React.FC = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
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
    </View>
  );
};

export default Feed;
