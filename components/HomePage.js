import React, {Component} from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from './HeaderComponent';
import NavBar from './NavBar';
import Filters from './Filters';
import { NativeRouter, Link, Route } from 'react-router-native';


export default class HomePage extends Component {
    render(){
        return (
        <NativeRouter>
            <ScrollView>
                <View style = {styles.Header}>
                    <HeaderComponent />
                </View>
                <View>
                    <NavBar />
                </View>
                <View>
                    <Filters />
                </View>
                </ScrollView>
            </NativeRouter>
                );
            }
}


const styles = StyleSheet.create({
    Header : {
        backgroundColor : '#F2F2F2',
        paddingTop : 40,
        paddingBottom : 15
    }
    });

AppRegistry.registerComponent('HomePage', () => HomePage);