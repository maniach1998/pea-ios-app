import React, {Component} from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView} from 'react-native';
import { NativeRouter, Link, Route, Switch } from 'react-router-native';
import HomePage from './components/HomePage';
import AddListing from './components/AddListing';
import DeleteListing from './components/DeleteListing';
import CompletedListings from './components/CompletedListings';
import Notifications from './components/Notifications';


 

export default class App extends Component {
  render(){
    return(
      <NativeRouter>
        <Switch>
        <Route exact path ='/' component = {HomePage}  />
        <Route exact path ='/add' component = {AddListing}  />
        <Route exact path ='/delete' component = {DeleteListing}  />
        <Route exact path ='/complete' component = {CompletedListings}  />
        <Route exact path ='/notification' component = {Notifications}  />
        </Switch>
     </NativeRouter>
    );
  }
}

