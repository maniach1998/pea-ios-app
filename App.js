import React, {Component} from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView} from 'react-native';
import { NativeRouter, Link, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HomePage from './components/HomePage';
import AddListing from './components/AddListing';
import DeleteListing from './components/DeleteListing';
import CompletedListings from './components/CompletedListings';
import Notifications from './components/Notifications';
import { addListing, removeListing, editListing } from './actions/listings';

const store = configureStore();

store.dispatch(addListing({
  id:1,
  name: 'abc', 
  need: 'Sell', 
  listingType: '2BHK',
  price: 150000, 
  agency: 'EA', 
  contact: '3429349021'
}));

store.dispatch(addListing({
  id:2,
  name: 'nkner', 
  need: 'Available for Rent', 
  listingType: '4BHK',
  price: 8393920, 
  agency: 'Direct', 
  contact: '42342782'
}));

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <NativeRouter>
          <Switch>
          <Route exact path ='/' component = {HomePage}  />
          <Route exact path ='/add' component = {AddListing}  />
          <Route exact path ='/delete' component = {DeleteListing}  />
          <Route exact path ='/complete' component = {CompletedListings}  />
          <Route exact path ='/notification' component = {Notifications}  />
          </Switch>
      </NativeRouter>
     </Provider>
    );
  }
}

