import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './app/screens/HomeScreen';
import { ListScreen } from './app/screens/ListScreen';
import { DetailsScreen } from './app/screens/DetailsScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Details: DetailsScreen
},
  {
    initialRouteName: 'Home',
  }
);
