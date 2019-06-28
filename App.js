import React from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import { HomeScreen, SearchScreen, SignupScreen, NotificationScreen, StashScreen, LoginScreen, MessageScreen, SettingsScreen, ProfileScreen } from './src/screens'

// Stacks 
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Signup: SignupScreen,
    Message: MessageScreen,
    Login: LoginScreen,
    Settings: SettingsScreen
  }
)

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Login: LoginScreen,
  Settings: SettingsScreen
})


const TabNav =  createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchScreen,
    Stash: StashScreen,
    Notification: NotificationScreen,
    Account: ProfileStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // NAV ICON LOGIC
        let iconName;
        if (routeName === 'Home') {
          iconName = `globe`;
       
        } 
        else if 
          (routeName === 'Search') {
          iconName = `search`;
        }
        else if 
          (routeName === 'Stash') {
          iconName = `plus`;
        }
        else if 
          (routeName === 'Notification') {
          iconName = `heart`;
        }
        else if 
          (routeName === 'Account') {
          iconName = `user`;
        }
        // You can return any component that you like here!
        return <View><Icon name={iconName} size={30} color="#900"/></View>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNav)