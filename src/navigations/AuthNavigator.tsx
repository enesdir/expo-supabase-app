import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../screens/auth/IntroScreen';
import LoginScreen from '../screens/auth/LogInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

export type AuthStackParamList = {
  Intro: undefined;
  LogIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Intro" screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Intro" component={IntroScreen} />
    <AuthStack.Screen name="LogIn" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
