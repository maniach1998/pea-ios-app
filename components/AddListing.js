import React, {Component} from 'react';
import {Text, View, StyleSheet, AppRegistry, TextInput, TouchableOpacity, Button} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Link } from "react-router-native";
import CheckboxFormX from 'react-native-checkbox-form';
import { addListing } from '../actions/listings';
import { connect } from 'react-redux';
import moment from 'moment';

export class AddListing extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            ListName: '',
            need: '',
            type: '',
            priceRange: '',
            area: '',
            agency: '',
            mail : '',
            contact : '',
            partyname : '',
            value: 0,
            onTheWeb: false
        };

      }

      radio_props = [
        {
            label: 'Direct', 
            value: 0 
        },
        {
            label: 'E.A',
            value: 1 
        }
      ];

    //   price_props = [
    //       {label : 'Rent', value : 0},
    //       {label :  'Outright', value : 1}
    //   ];

      need_props = [
        {label : 'Rent Enquiry', value : 0},
        {label :  'Available for Rent', value : 1},
        {label : 'Sell', value : 2},
        {label: 'Buy', value : 3}
    ];

     typeData1 = [
        {
            label: '1 RK',
            value: '1RK',
            RNchecked : false,

        },
        {
            label: '1 BHK',
            value: '1BHK',
            RNchecked : false,
        },
        {
            label: '2 BHK',
            value: '2BHK',
            RNchecked : false,

        },
        {
            label: '2 & 1/2 BHK',
            value: '2.5BHK',
            RNchecked : false,
        },

        {
            label: '3 BHK',
            value: '3BHK',
            RNchecked : false,
        },
        {
            label: '4 BHK',
            value: '4BHK',
            RNchecked : false,
        },
        
    ];
    typeData2 = [
        
        
        {
            label: 'Villa',
            value: 'Villa',
            RNchecked : false,
        },
        {
            label: 'Rowhouse',
            value: 'Rowhouse',
            RNchecked : false,
        },
        {
            label: 'Penthouse',
            value: 'Penthouse',
            RNchecked : false,
        },
        {
            label: 'Commercial',
            value: 'Commercial',
            RNchecked : false,
        },
        {
            label: 'Shop',
            value: 'Shop',
            RNchecked : false,
        },
    ];

 
    _onSelect = ( item ) => {
        console.log(item);
      };
  
    
    render(){

        const { dispatch } = this.props;

        return (
            <View>
               <View style = {styles.Heading}>
                   <View style = {styles.Titles}>
                       <View style = {{width : 600}}>
                        <Text style = {styles.words}>New Listing</Text>
                        </View>
                   </View>
                   <View style = {styles.closing}>
                    <Link underlayColor='none' to='/home'>
                        <Text style = {styles.cross}>X</Text></Link>
                    </View>
               </View>


               <View style= {styles.Content}>

                    <View style = {styles.STitles}>
                        <Text style = {styles.HeadStyle}> LISTING NAME :</Text>
                        <View style = {{marginTop : 5}}>
                        <TextInput 
                        style = {{borderColor: '#009EFD', borderWidth: 1}}
                        onChangeText={(ListName) => this.setState({ListName})}
                        value={this.state.ListName}/>
                        </View>
                    </View>


                    <View style = {styles.STitles}>
                        <View style = {styles.NeedFlex}>
                            <View style = {styles.Need}>
                            <Text style = {styles.HeadStyle}> NEED :</Text>
                            </View>
                            <View style = {styles.needOpt}>
                                <RadioForm
                                radio_props={this.need_props}
                                initial={-1}
                                formHorizontal = {false}
                                buttonColor = '#CC4F4F'
                                selectedButtonColor = '#CC4F4F'
                                labelStyle ={{marginLeft : 0}}
                                buttonSize = {12}

                                onPress={(value) => {this.setState({ value })}}
                                />
                              
                            </View>
                        </View>

                    </View>


                    <View style = {styles.STitles}>
                        <View style = {styles.TypeFlex}>
                        <View style={styles.Type}>
                        <Text style = {styles.HeadStyle}> TYPE :</Text>
                        </View>
                        <View style= {styles.typeStyle}>
                            <View style = {styles.type1}>
                            <CheckboxFormX
                            dataSource={this.typeData1}
                            itemShowKey="label"
                            itemCheckedKey="RNchecked"
                            iconSize={20}
                            iconColor='#CC4F4F'
                            formHorizontal={false}
                            labelHorizontal={true}
                            onChecked={(item) => this._onSelect(item)}
                            />
                          </View>
                          <View style = {styles.type2}>  
                            <CheckboxFormX
                            dataSource={this.typeData2}
                            itemShowKey="label"
                            itemCheckedKey="RNchecked"
                            iconSize={20}
                            iconColor='#CC4F4F'
                            formHorizontal={false}
                            labelHorizontal={true}
                            onChecked={(item) => this._onSelect(item)}
                        />
                        </View>
                            


                        </View>
                        
                        </View>
                    </View>


                    <View style = {styles.STitles}>
                        <View style = {styles.AgencyFlex}>
                            <View style = {styles.Agency}>
                                <Text style = {styles.HeadStyle}>PRICE :</Text> 
                            </View>
                            {/* <View style = {styles.AgencyEntry}>
                                <RadioForm
                                radio_props={this.price_props}
                                initial={-1}
                                formHorizontal = {true}
                                buttonColor = '#CC4F4F'
                                selectedButtonColor = '#CC4F4F'
                                labelStyle ={{marginRight : 10}}
                                buttonSize = {12}
                                onPress={(value) => {this.setState({ value })}}
                                />
                            </View> */}
                        </View>
                        
                        <View style = {{marginTop : 5}}>
                        <TextInput 
                        style = {{borderColor: '#009EFD', borderWidth: 1}}
                        onChangeText={(priceRange) => this.setState({priceRange})}
                        value={this.state.priceRange}/>
                        </View>
                    </View>


                    <View style = {styles.STitles}>
                        <Text style = {styles.HeadStyle}>CARPET AREA :</Text>
                        <View style = {{marginTop : 5}}>
                        <TextInput 
                        style = {{borderColor: '#009EFD', borderWidth: 1}}
                        onChangeText={(area) => this.setState({area})}
                        value={this.state.area}/>
                        </View>
                    </View>


                    <View style = {styles.STitles}>
                        
                        <View style = {styles.AgencyFlex}>
                            <View style = {styles.Agency}>
                                <Text style = {styles.HeadStyle}>AGENCY :</Text>
                            </View>
                            <View style = {styles.AgencyEntry}>
                                <RadioForm
                                radio_props={this.radio_props}
                                initial={-1}
                                formHorizontal = {true}
                                buttonColor = '#CC4F4F'
                                selectedButtonColor = '#CC4F4F'
                                labelStyle ={{marginRight : 10}}
                                buttonSize = {12}
                                onPress={(value) => {this.setState({ value })}}
                                />
                            </View>
                        </View>
        
                    
                        <View style = {styles.AgencyFlex}>
                            <View style = {styles.Agency}>
                                <Text style = {styles.HeadStyle}>PARTY NAME :</Text>
                            </View>
                            <View style = {styles.AgencyEntry}>
                                <TextInput 
                            style = {{borderColor: '#009EFD', borderWidth: 1}}
                            onChangeText={(partyname) => this.setState({partyname})}
                            value={this.state.partyname}/>
                            </View>
                        </View>

                        <View style = {styles.AgencyFlex}>
                            <View style = {styles.Agency}>
                                <Text style = {styles.HeadStyle}>CONTACT : </Text>
                            </View>
                            <View style = {styles.AgencyEntry}>
                                <TextInput 
                            style = {{borderColor: '#009EFD', borderWidth: 1}}
                            onChangeText={(contact) => this.setState({contact})}
                            textContentType = 'telephoneNumber'
                            value={this.state.contact}/>
                            </View>
                        </View>

                        <View style = {styles.AgencyFlex}>
                            <View style = {styles.Agency}>
                                <Text style = {styles.HeadStyle} >EMAIL : </Text>
                            </View>
                            <View style = {styles.AgencyEntry}>
                                <TextInput 
                            style = {{borderColor: '#009EFD', borderWidth: 1}}
                            onChangeText={(mail) => this.setState({mail})}
                            textContentType = 'emailAddress'
                            value={this.state.mail}/>
                            </View>
                        </View>
                    
                    </View>

                    <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.ButtonEffects}>
                            <Button 
                            title = "SAVE LISTING"
                            color = '#000'
                            accessibilityLabel = 'Save Listing' 
                            onPress = {() => dispatch(addListing({
                                name: this.state.ListName,
                                need: this.state.need,
                                type: this.state.type,
                                price: this.state.priceRange,
                                carpetArea: this.state.area,
                                agency: this.state.agency,
                                partyName: this.state.partyname,
                                contact: this.state.contact,
                                email: this.state.mail,
                                completed: false,
                                createdAt: moment(),
                                startDate: moment(),
                                endDate: moment(),
                                onTheWeb: false
                            }))}
                            />
                        </TouchableOpacity>
                    </View>

               </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    //for header

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
    //for main content
    Content : {
        backgroundColor :  '#F2F2F2',

    },
    
    //for 1st flex i.e  listing name
    STitles : {

        margin : 10,
        paddingRight :5,
      
    },

    HeadStyle : {
        fontSize : 15,
        fontWeight : 'bold',
    },

    inputAreaStyle : {
        flexDirection : 'row',height: 70, width : 400, margin :20
    },

    AgencyFlex : {
        flexDirection : 'row',
        marginTop: 10
    },
    Agency : {
        flex : 1,
    },
    AgencyEntry : {
        flex : 2,
    },

    NeedFlex : {
        flexDirection : 'row',
        flex:1,
    },

    Need : {
        flex : 1,
    },
    needOpt : {
        flex : 2,
        alignItems : 'flex-start',
        marginTop : 6
    },

    TypeFlex : {
        flexDirection : 'row',
        flex : 1,
    },

    Type : {
        flex:1,
    },

    typeStyle : {
        flexDirection : 'row',
        marginTop : 10,
        flex :2,
         width:300,
        alignItems :'flex-start',

        
    },

    type1 : {
        flex : 1,
        marginTop : 6,
        alignItems :'flex-start',

        
    },

    type2 : {
        flex : 1,
        marginTop : 6,
        alignItems :'flex-start',

  
    },
  
    ButtonEffects : {
        width: 200,
        backgroundColor: '#fff',
        borderWidth : 1,
        borderColor : '#e3eff0',
        borderRadius : 5,
        fontSize : 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },


})

export default connect()(AddListing);

AppRegistry.registerComponent('AddListing', () => AddListing);
