import React from 'react';
import {Box, StatusBar, Text} from 'native-base';

const HomeScreen = () => {
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="black" />
      <Text fontSize={30}>Welcome to HomePage!</Text>
    </Box>
  );
};

export default HomeScreen;
