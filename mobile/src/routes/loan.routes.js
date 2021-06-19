import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import LoanInfo from '../pages/LoanInfo';
import LoanCreated from '../pages/LoanCreated';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="LoanInfo" component={LoanInfo} />
      <Stack.Screen name="LoanCreated" component={LoanCreated} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
