import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
  Router, 
  Route, 
  Schema, 
  Actions,
  Scene,
  Animations, 
  TabBar,
  ActionConst
} from 'react-native-router-flux';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Home from './containers/Home';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" hideNavBar component={ Home } />
  </Scene>
);

export default class Root extends React.Component {
  render() {
    return (
      <Router hideNavBar={ true } scenes={ scenes }/>
    );
  }
}