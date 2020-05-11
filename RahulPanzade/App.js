import React from 'react';
import { Button, Image } from 'react-native';

//Import React Navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import LocateMe from './LocateMe';
import ManualLogin from './ManualLogin';
import MobInAppBrowser from './MobInAppBrowser'
import RegisterUser from './pages/RegisterUser'
import HomeScreen from './pages/HomeScreen'
import DeleteUser from './pages/DeleteUser'
import UpdateUser from './pages/UpdateUser'
import ViewAllUser from './pages/ViewAllUser'
import ViewUser from './pages/ViewUser'
import FingerprintExample from './FingerprintExample'

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: Home, navigationOptions: {
        title: 'Home',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    LocateMe: {
      screen: LocateMe, navigationOptions: {
        title: 'LocateMe',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    FingerprintExample: {
      screen: FingerprintExample, navigationOptions: {
        title: 'Finger Print Scanner',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    MobInAppBrowser: {
      screen: MobInAppBrowser, navigationOptions: {
        title: 'Mobile InApp Browser',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    RegisterUser: {
      screen: RegisterUser, navigationOptions: {
        title: 'Register User',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    HomeScreen: {
      screen: HomeScreen, navigationOptions: {
        title: 'HomeScreen',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    UpdateUser: {
      screen: UpdateUser, navigationOptions: {
        title: 'Update',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    ViewUser: {
      screen: ViewUser, navigationOptions: {
        title: 'View',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    ViewAllUser: {
      screen: ViewAllUser, navigationOptions: {
        title: 'ViewAll',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
    DeleteUser: {
      screen: DeleteUser, navigationOptions: {
        title: 'Delete',
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#FFFFFF',
      },
    },
  },
);
const LoginStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    ManualLogin: { screen: ManualLogin },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Login',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Login: { screen: LoginStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('./home.png')
                  : require('./login.jpg')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === 'Login') {
          return (
            <Image
              source={
                focused
                  ? require('./home.png')
                  : require('./login.jpg')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);


export default createAppContainer(App);

