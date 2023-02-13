import { NavigationContainer } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from 'features/detail/screen';
import { HomeScreen } from 'features/home/screen';
import * as React from 'react';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options} initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
