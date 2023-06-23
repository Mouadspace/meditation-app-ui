import React from 'react';

import Onbording from './src/screens/onBording';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="/onbording" component={Onbording} />
        <Stack.Screen name="/home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
