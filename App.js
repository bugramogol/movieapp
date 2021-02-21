/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigator/navigation'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  },
};

export class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>

    );
  }
};

export default App;
