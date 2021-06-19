import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from './loan.routes';
import Loans from '../pages/Loans';

const Tab = createBottomTabNavigator();

// export default function AppRoutes() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         cardStyle: {
//           backgroundColor: '#fff',
//         },
//       }}
//       tabBarOptions={{
//         activeTintColor: '#e63888',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{
//           tabBarLabel: 'Solicitar Empréstimo',
//           tabBarIcon: ({ focused }) => (
//             <Icon name="home" size={20} color={focused ? '#e63888' : 'gray'} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Loans"
//         component={Loans}
//         options={{
//           tabBarLabel: 'Empréstimos Solicitados',
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="dollar-sign"
//               size={20}
//               color={focused ? '#e63888' : 'gray'}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
      tabBarOptions={{
        activeTintColor: '#e63888',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Solicitar Empréstimo',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? '#e63888' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Loans"
        component={Loans}
        options={{
          tabBarLabel: 'Empréstimos Solicitados',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="dollar-sign"
              size={20}
              color={focused ? '#e63888' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
