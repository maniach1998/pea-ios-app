import React, {Component} from 'react';
import {Text, View, StyleSheet, AppRegistry, Image} from 'react-native';
import { Link } from "react-router-native";
import Listings from './Listings';

export default class CompletedListings extends Component {
    render(){
        return (
            <View style = {{backgroundColor : '#F2F2F2'}}>
                <View style = {styles.Heading}>
                   <View style = {styles.Titles}>
                       <View style = {{width :600}}>
                            <Text style = {styles.words}>Completed Listings </Text>
                        </View>
                   </View>
                   <View style = {styles.closing}>
                   <Link underlayColor='none' to='/home'><Text style = {styles.cross}>X</Text></Link>
                    </View>
               </View >
                    
               <View style = {styles.textStyle}>
                    <Text>Search Through Completed Deals :</Text>
               </View>

               <View>
                   <Listings />
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    Heading : {
        backgroundColor : '#3C3C3C',
        height : 50,
        flexDirection: 'row',
    },

    Titles : {
        flex : 1,
        color : '#C94343', 
        fontWeight : 'bold',
        marginTop : 15,
        paddingLeft :10,
        alignItems : 'flex-start',
    },

    closing : {
        flex : 2,
        alignItems : 'flex-end',
        marginTop : 15,
        paddingRight :10,
    },

    words : {
        color : '#C94343', 
        fontWeight : 'bold',
        fontSize : 20,
        marginRight : 5
    },

    cross : {
        color : '#fff', 
        fontWeight : 'bold',
        fontSize : 20,
        marginRight : 5
    }, 

    textStyle : {
        margin : 10,
        fontWeight : '200',

    }

})

AppRegistry.registerComponent('CompletedListings', () => CompletedListings);