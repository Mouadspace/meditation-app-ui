import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native/types';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>hey what you doing in home ?</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
