import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import Index from './Index';

export default function Main() {
  return (
    <PaperProvider>
      <Index/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);