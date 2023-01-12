import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TAX_LIST, SUBMISSION_CREATION } from '../Routes';
import { TaxListScreen, SubmissionCreationScreen } from '@/features';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TAX_LIST') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'SUBMISSION_CREATION') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name={TAX_LIST}
        component={TaxListScreen}
        //        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen name={SUBMISSION_CREATION} component={SubmissionCreationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;