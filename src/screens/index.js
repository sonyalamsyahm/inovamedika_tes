import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Register from './public/Register';
import Login from './public/Login';
import Home from './private/Home';
import Form from './private/Form';

const Public = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
});

const Private = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Form: {
    screen: Form,
    navigationOptions: {
      headerTitle: 'Pendaftaran Pasien',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: 'rgba(63, 161, 35, 0.8)',
      },
    },
  },
});

const Index = createSwitchNavigator({
  Public,
  Private,
});

export default createAppContainer(Index);
