import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Feed from './src/components/feeds';
import HomeScreen from './src/screens/home';

const App: FC = () => {
  const isDarkMode: boolean = false;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <Feed />
    </SafeAreaView>
  );
};

export default App;
