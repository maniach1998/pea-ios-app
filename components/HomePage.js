import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, ScrollView, TextInput} from 'react-native';
import HeaderComponent from './HeaderComponent';
import NavBar from './NavBar';
import Filters from './Filters';
import Listings from './Listings';
import { connect } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import { setTextFilter } from '../actions/filters';


export class HomePage extends Component {

    render(){

        const { dispatch, text } = this.props;
        
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
                <View>
                    <TextInput
                    style = {styles.SearchBar}
                    placeholder="Search"
                    onChangeText={(text) => {
                        dispatch(setTextFilter(text));
                    }}
                    value={text}
                    />
                </View>
                <View>
                    <Listings />
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
    },

    SearchBar: {
        borderColor: '#007bc7', 
        borderWidth: 1, 
        margin: 10, 
        padding:5, 
        borderRadius: 30 
    },
});

export default connect()(HomePage);

AppRegistry.registerComponent('HomePage', () => HomePage);