import React, {Component} from 'react';
import {Text, View, StyleSheet, AppRegistry, Image} from 'react-native';

export default class HeaderComponent extends Component {
    render(){
        return (
            <View>
               <View style = {styles.Container}>
                <View style = {styles.logo}>
                <Image source={require('../icons/PEA-logo.png')} style = {{width : 50, height : 50}} resizeMode='contain' />
                </View>
                  <View style = {styles.text}>
                        <View>
                                <Text style = {styles.Title}>
                                Parasrampuria
                                </Text>
                        </View> 
                        <View>
                                <Text style = {styles.SubTitle}>
                                    ESTATE AGENCY
                                </Text>
                        </View>
                    </View> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    Title : {
        color : '#C94343', 
        fontSize : 25,
        
    },

    SubTitle : {
        color : '#707070', 
        fontSize : 15,
        
    },

    Container : {
        display: 'flex',
        flexDirection : 'row'
    },

    logo : {
        flex : 1,
       
        alignItems : 'flex-end'
    },

    text : {
        flex : 2,
        
        alignItems : 'flex-start'
    }



})

AppRegistry.registerComponent('HeaderComponent', () => HeaderComponent);