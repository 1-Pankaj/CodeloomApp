// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Components/Screens/Onboarding';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stylesheet from './Components/StyleSheet/StyleSheet';
import AnimatedButtonView from './Components/UIElements/AnimatedButton';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="AnimatedButtonView" component={AnimatedButtonView} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </PaperProvider>
  );
}

export default App;