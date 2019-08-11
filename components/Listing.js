import React, { Component } from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView, TouchableOpacity, DatePickerIOS} from 'react-native';
import { connect } from 'react-redux';
import CheckboxFormX from 'react-native-checkbox-form';
import { removeListing } from '../actions/listings';


export class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
        };
      
    }

    optData = [
        {
            label: 'On the web',
            value: 'On the web',
            RNchecked : false,
        },

        {
         label: 'Completed',
         value: 'Completed',
         RNchecked : false,
         }
    ];


    _onSelect = ( item ) => {
        console.log(item);
      };



    render() {

        const {dispatch, id,name,need,listingType,price,carpetArea,agency, agencyName,agencyContact,agencyEmail,partyName,
                contact,email,createdAt,completed,onTheWeb,startDate,endDate,} = this.props;

        return (
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.Listing}>
                        <View style={styles.Name}>
                            <Text style={styles.NameStyle}>hsccbesdmn qbhjws cdlkwxhcjdjhbnskckjfnskxkjcnfkdsjxnc</Text>
                        </View>
                        <View style={styles.Data}>
                            <View style={styles.DataLeft}>
                                
                                    <Text style = {styles.detail}>available for rent</Text>
                                    <Text style = {styles.detail}>From:</Text>
                                    <Text style = {styles.detail}>To: <Text></Text></Text>
                                    <Text><Text style = {styles.detail}>Party Name: </Text>ajervehjprwedc</Text>
                                    
                                
                            </View>
                            <View style={styles.DataRight}>
                                
                                <Text><Text style = {styles.detail}>Type:</Text> commercial</Text>                                                        
                                <Text>₹<Text></Text> 2734</Text>                        
                                <Text><Text> 123425</Text>sq. ft</Text>
                                <Text><Text style = {styles.detail}>Contact:</Text> 1234567899</Text>
                                <Text style = {styles.detail}>asqdwefthv@gmail.com</Text>
                            </View>
                            
                        </View>
                    <View style = {styles.chooseData}>
                 
                    <CheckboxFormX
                        
                        dataSource={this.optData}
                        itemShowKey="label"
                        itemCheckedKey="RNchecked"
                        iconSize={12}
                        iconColor='#CC4F4F'
                        formHorizontal={true}
                        labelHorizontal={true}
                        onChecked={(item) => this._onSelect(item)}
                    />
      
                          
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        flexDirection: 'column',
        flex:1
    },

    NameStyle: {
        fontSize: 20,
        color: '#C94343',
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
    Name:{
        flex:1,
     
    },

    Data: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection : 'row',
    },

    DataLeft: {
        flex:1,
        margin:4,
        justifyContent:'flex-start',
    },

    DataRight: {
        flex:1,
        margin:4,
        justifyContent:'flex-start',

    },

    chooseData: {
        flex:1,
        margin :5
    },

    agencyDetails: {
        
    },

    detail: {
        fontSize:13,
        fontWeight:"500",
        paddingBottom:3
    },
});

export default connect()(Listing);
