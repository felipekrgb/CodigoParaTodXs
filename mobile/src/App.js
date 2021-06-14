import 'react-native-gesture-handler';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <Routes />
      </View>
    </NavigationContainer>
  );
}
