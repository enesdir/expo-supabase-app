import React from 'react';
import {View, Text} from 'native-base';
import ThemeToggle from '../components/ThemeToggle';

const SettingsScreen: React.FC = () => {
  return (
    <View flex={1}>
      <Text fontSize={30}>Welcome to Settings!</Text>
      <ThemeToggle />
    </View>
  );
};

export default SettingsScreen;
