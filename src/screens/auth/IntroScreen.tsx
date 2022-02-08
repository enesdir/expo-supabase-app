import React from 'react';
import {Box, HStack, Link, StatusBar, Text} from 'native-base';
import Layout from '../../components/Layout';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigations/AuthNavigator';
import AuthLayout from '../../components/AuthLayout';

const IntroScreen = () => {
  const {navigate} = useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <AuthLayout title="Welcome">
      <StatusBar backgroundColor="blue" />
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: 'gray.200',
          }}
        >
          I'm a new user.{' '}
        </Text>
        <Link
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          onPress={() => navigate('SignUp')}
        >
          Sign Up
        </Link>
      </HStack>
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: 'gray.200',
          }}
        >
          I'm already user.{' '}
        </Text>
        <Link
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          onPress={() => navigate('LogIn')}
        >
          Log In
        </Link>
      </HStack>
    </AuthLayout>
  );
};

export default IntroScreen;
