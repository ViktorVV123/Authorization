import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeComponent} from './src/Components/HomeComponent/HomeComponent.tsx';
import {SafeAreaView} from 'react-native';
import {LoginComponent} from './src/Components/LoginComponent/LoginComponent.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterComponent} from './src/Components/RegisterComponent/RegisterComponent.tsx';
import {MainNavigate} from './src/Navigate/MainNavigate.tsx';

const Stack = createNativeStackNavigator();
export type NavigateType = {
  Reg: undefined;
  Log: undefined;
  Main: undefined;
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: '#E5EFF8'}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Log"
            component={LoginComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Reg"
            component={RegisterComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigate}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
