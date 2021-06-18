import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

if (Platform.OS === 'android') {
  // eslint-disable-next-line global-require
  require('intl');
  // eslint-disable-next-line global-require
  require('intl/locale-data/jsonp/pt-BR');
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AppProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}
        >
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
