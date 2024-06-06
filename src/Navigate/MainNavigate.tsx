import React from 'react';
import {FirstComponent} from '../Components/FirstComponent/FirstComponent.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainComponent} from '../Components/MainComponent/MainComponent.tsx';
import {PersonalAcc} from '../Components/PersonalAcc/PersonalAcc.tsx';

export const MainNavigate = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="First"
        component={MainComponent}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="One"
        component={FirstComponent}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={PersonalAcc}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
