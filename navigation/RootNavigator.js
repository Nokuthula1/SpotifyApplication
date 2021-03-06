import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  return (
    
    <NavigationContainer  >
      
      <StatusBar hidden />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;