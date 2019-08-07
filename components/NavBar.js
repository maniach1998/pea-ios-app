import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, AppRegistry, ImageBackground} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import AddListing from './AddListing';
import DeleteListing from './DeleteListing';
import CompletedListings from './CompletedListings';
import Notifications from './Notifications';


export default class NavBar extends Component {
    render(){
        return (
            <NativeRouter>
            <View>
                <View style = {styles.Container}>
                    <Link underlayColor='none' to="/add">
                    <View style = {styles.add}>

                            <Image source={require('../icons/Add.png')} style = {styles.img1} resizeMode='contain' />

                    </View>
                    </Link>

                    <Link underlayColor='none' to="/delete">
                    <View style = {styles.delete}>
                        <Image source={require('../icons/Delete.png')} style = {styles.img2} resizeMode='contain' />
                    </View>
                    </Link>

                    <Link underlayColor='none' to="/complete">
                    <View style = {styles.completed}>
                        <Image source={require('../icons/Success.png')} style = {styles.img3} resizeMode='contain' />
                    </View>
                    </Link>

                    <Link underlayColor='none' to="/notification">
                    <View style = {styles.notify}>
                        <Image source={require('../icons/Reminders.png')} style = {styles.img4} resizeMode='contain' />  
                    </View>
                    </Link>
                    
                </View>

                <Route exact path ='/add' component = {AddListing}  />
                <Route exact path ='/delete' component = {DeleteListing}  />
                <Route exact path ='/complete' component = {CompletedListings}  />
                <Route exact path ='/notification' component = {Notifications}  />

            </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    Container : {
        flexDirection: 'row',
        borderRadius : 100,
        borderWidth : 1.5,
        borderColor : '#707070',
        height : 50,
        margin: 5,
    
    },

    add : {
        flex : 1,
        borderBottomLeftRadius : 100,
        borderTopLeftRadius : 100,
        marginLeft : 20,

    },

    delete :{
        flex : 2,
        marginLeft : 50
    },

    completed : {
        flex : 3,
        marginLeft : 55

    },

    notify : {
        flex : 4,
        borderBottomRightRadius : 100,
        borderTopRightRadius : 100,
        marginLeft:60
    },

    img1 : {
        flex : 1,
        width : 40,
    },

    img2 : {
        flex : 2,
        width : 40,
    },

    img3 : {
        flex : 3,
        width : 40,
    },

    img4 : {
        flex : 4,
        width : 40

    }

})

AppRegistry.registerComponent('NavBar', () =>  NavBar);