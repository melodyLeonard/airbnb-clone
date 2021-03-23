import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Feed: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://pbs.twimg.com/media/ExFN2F7XAAEA4VF?format=jpg&name=medium',
        }}
      />
      <Text style={styles.title}>1 bed room</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid
        mollitia minima optio nemo! Veritatis, eligendi neque enim, repudiandae
        totam voluptatem voluptas alias ratione dolores doloremque animi esse
        tempora tenetur.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $30</Text> / text
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Feed;
