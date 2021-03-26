import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/navigation';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <RootNavigation />
    </>
  );
};
export default App;
