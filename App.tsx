import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeComponent} from './src/Components/HomeComponent/HomeComponent.tsx';
import {SafeAreaView} from 'react-native';
import {LoginComponent} from './src/Components/LoginComponent/LoginComponent.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  /*StatusBar.setBackgroundColor('green'); //изменить верхнюю часть где заряд батарейки или сеть */
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#E5EFF8'}}>
        {/* <LoginComponent />*/}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
          />

        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
