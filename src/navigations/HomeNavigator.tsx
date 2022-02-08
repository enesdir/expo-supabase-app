import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MoreScreen from '../screens/MoreScreen';

import {MaterialIcons as Icon} from '@expo/vector-icons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {themes} from '../themes';

export type AppStackParamList = {
  Main: undefined;
  Home: undefined;
  More: undefined;
  Account: undefined;
  Settings: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();
const AppBottomTabStack = createBottomTabNavigator<AppStackParamList>();

const AppBottomTabRoutes: React.FC = () => (
  <AppBottomTabStack.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: themes[5],
      tabBarIcon: ({color, size, focused}) => {
        if (route.name === 'Account') {
          return (
            <View style={{transform: [{scale: focused ? 0.9 : 1}]}}>
              <LinearGradient colors={[themes[3], themes[5]]} style={styles.iconTabRound}>
                <Icon name="people" size={size} color="white" />
              </LinearGradient>
            </View>
          );
        }
        const icons = {
          Home: 'dashboard',
          More: 'dashboard',
          Account: 'dashboard',
          Settings: 'settings',
        };
        return <Icon name={icons[route.name]} size={size} color={color} />;
      },
    })}
  >
    <AppBottomTabStack.Screen name="Home" component={HomeScreen} />
    <AppBottomTabStack.Screen name="Account" component={AccountScreen} />
    <AppBottomTabStack.Screen name="Settings" component={SettingsScreen} />
  </AppBottomTabStack.Navigator>
);

const HomeNavigator: React.FC = () => (
  <AppStack.Navigator initialRouteName="Main">
    <AppStack.Screen name="Main" component={AppBottomTabRoutes} options={{headerShown: false}} />
    <AppStack.Screen name="More" component={MoreScreen} />
  </AppStack.Navigator>
);

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default HomeNavigator;
