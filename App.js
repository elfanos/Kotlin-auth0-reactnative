import React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeView from './app/components/HomeView';
import store from './app/states/index'

export default class App extends React.Component {
  render() {
    return (
        <Provider store = {store}>
            <HomeView/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('App', () => App);
