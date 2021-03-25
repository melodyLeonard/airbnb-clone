import Feed from 'components/feeds';
import React from 'react';
import {FlatList} from 'react-native';
import {feedData} from '../../assets/data/feed';

const PostsScreen: React.FC = (): JSX.Element => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      renderItem={({item}) => <Feed item={item} />}
      data={feedData}
      inverted={true}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PostsScreen;
