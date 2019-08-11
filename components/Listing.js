import React, { Component } from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import { connect } from 'react-redux';
import { removeListing } from '../actions/listings';

export class Listing extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { 
            dispatch, 
            id, 
            name,
            need,
            type,
            price,
            carpetArea,
            agency,
            partyName,
            contact,
            email,
            completed,
            createdAt,
            startDate,
            endDate,
            onTheWeb} = this.props;

        return (
            <View style={styles.Container}>
                <View style={styles.Listing}>
                    <Text style={styles.Name}>{name}</Text>
                    <View style={styles.Data}>
                        <Text>{need}</Text>
                        <Text>{price}</Text>
                        <Text>{agency}</Text>
                        <Text>{contact}</Text>
                        <Text>{type}</Text>
                        <Text>{carpetArea}</Text>
                        <Text>{partyName}</Text>
                        <Text>{email}</Text>
                        <Text>{completed}</Text>
                        <Text>{onTheWeb}</Text>
                    </View>
                    <TouchableOpacity>
                        <Button title="X" onPress={() => dispatch(removeListing({ id }))} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#009EFD',
        marginBottom: 10,
    },

    Listing: {
        margin: 10,
    },

    Name: {
        fontSize: 25,
        color: '#C94343',
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },

    Data: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});

export default connect()(Listing);