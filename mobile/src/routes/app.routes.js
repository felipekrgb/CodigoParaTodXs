import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Loans from '../pages/Loans';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Loans" component={Loans} />
    </App.Navigator>
  );
};

export default AppRoutes;
