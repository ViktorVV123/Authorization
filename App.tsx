import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeComponent} from './src/Components/HomeComponent/HomeComponent.tsx';
import {TestThreePage} from './src/Components/TestThreePage/TestThreePage.tsx';

function App(): React.JSX.Element {
  /*StatusBar.setBackgroundColor('green'); //изменить верхнюю часть где заряд батарейки или сеть */
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeComponent} />
        <Tab.Screen name="Settings" component={TestThreePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
