import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Posts from 'screens/post';
// import HomeScreen from './src/screens/home';

const App: FC = () => {
  const isDarkMode: boolean = false;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <Posts />
    </SafeAreaView>
  );
};

export default App;
