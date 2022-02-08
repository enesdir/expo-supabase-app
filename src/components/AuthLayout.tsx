import React from 'react';
import {Box, Heading, Center, Text} from 'native-base';
import {Dimensions, Platform} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {linearColors} from '../themes/';

type Props = {title: string};

const AuthLayout: React.FC<Props> = ({title, children}) => {
  const {height} = Dimensions.get('window');
  const percent = Platform.OS === 'web' ? 0.9 : 0.3;
  const linearHeight = Math.round(percent * height);
  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          justifyContent="center"
        >
          {title}
        </Heading>

        {children}
      </Box>
    </Center>
  );
};

export default AuthLayout;
