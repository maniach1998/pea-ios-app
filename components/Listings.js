import React, { Component } from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView} from 'react-native';
import Listing from './Listing';
import { connect } from 'react-redux';
import selectListings from '../selectors/listings';

export class Listings extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.Container}>
                    {this.props.listings.map((listing) => {
                        return <Listing key={listing.id} {...listing} />;
                    })}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listings: selectListings(state.listings, state.filters)
    };
};

const styles = StyleSheet.create({
    Container: {
        margin: 10,
        
    },
});

export default connect(mapStateToProps)(Listings);

AppRegistry.registerComponent('Listings', () => Listings);