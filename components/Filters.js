import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { NativeRouter } from "react-router-native";
import Dialog, { DialogContent, SlideAnimation, ScaleAnimation, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { connect } from 'react-redux';
import { setNeedFilter, setListingTypeFilter, setPriceFilter } from '../actions/filters';
import CheckboxFormX from 'react-native-checkbox-form';
const DownArrow = require('../icons/down-arrow.png');

export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainVisible : false,
            needVisible: false,
            typeVisible: false,
            priceVisible: false,
            carpetVisible: false,
            checkedItems: [],
            need: [],
            listingType: [],
            priceRange: [0, Infinity],
        };
    }

    filterData = [
        {
            label: 'Need',
            value: 'Need',
            RNchecked : false,

        },
        {
            label: 'Type',
            value: 'Type',
            RNchecked : false,
        },
        {
            label: 'Price',
            value: 'Price',
            RNchecked : false,

        },
        {
            label: 'Carpet',
            value: 'Carpet',
            RNchecked : false,
        },
        
    ];
    
    needData = [
        {
            label: 'Buy',
            value: 'Buy',
            RNchecked : false,
        },
        {
            label: 'Sell',
            value: 'Sell',
            RNchecked : false,
       },
       {
           label: 'Rent Enquiry',
            value: 'Rent Enquiry',
            RNchecked : false,
        },
        {
            label: 'Available for Rent',
            value: 'Available for Rent',
            RNchecked : false,
        },

    ];

    typeData = [
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
        {
            label: 'Villa',
            value: 'Villa',
            RNchecked : false,
        },
        {
            label: 'Row House',
            value: 'Row House',
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

    priceRentData = [
        {
            label: 'upto 15K',
            value: [0, 15000],
            RNchecked : false,
        },
        {
            label: '15K - 20K',
            value: [15000, 20000],
            RNchecked : false,
        },
        {
            label: '20K - 30K',
            value: [20000, 30000],
            RNchecked : false,
        },
        {
            label: '30K - 50K',
            value: [30000, 50000],
            RNchecked : false,
        },

        {
            label: '55K - 65K',
            value: [55000, 65000],
            RNchecked : false,
        },
        {
            label: '65K - 90K',
            value: [65000, 90000],
            RNchecked : false,
        },
        {
            label: 'above 90K',
            value: [90000, Infinity],
            RNchecked : false,
        },
    ];

    priceOutrightData = [
        {
            label: 'upto 45L',
            value: [0, 4500000],
            RNchecked : false,
        },
        {
            label: '45L - 70L',
            value: [4500000, 7000000],
            RNchecked : false,
        },
        {
            label: '70L - 80L',
            value: [7000000, 8000000],
            RNchecked : false,
        },
        {
            label: '80L - 1.15Cr',
            value: [8000000, 11500000],
            RNchecked : false,
        },

        {
            label: '1.15Cr - 1.60Cr',
            value: [11500000, 16000000],
            RNchecked : false,
        },
        {
            label: '1.60Cr - 1.9Cr',
            value: [16000000, 19000000],
            RNchecked : false,
        },
        {
            label: '1.9Cr -  3.5Cr',
            value: [19000000, 35000000],
            RNchecked : false,
        },
        {
            label: '3.5Cr - 5Cr',
            value: [35000000, 50000000],
            RNchecked : false,
        },
        {
            label: '5Cr - 8Cr',
            value: [50000000, 80000000],
            RNchecked : false,
        },
        {
            label: '8Cr Above',
            value: [80000000, 100000000000],
            RNchecked : false,
        },
        
    ];

    priceSelectAll = [
        {
            label: 'Select all',
            value: [0, Infinity],
            RNchecked: true,
        }
    ];

    _onSelect = ( item ) => {
        checkedItems = [];

        item.map((child) => {
            if (child.RNchecked === true) {
                checkedItems.push(child.label);
            }
        });

        this.setState({ checkedItems });
    };

    _onNeedSelect = ( item ) => {
        needCheckedItems = [];

        item.map((child) => {
            if (child.RNchecked === true) {
                needCheckedItems.push(child.label);
            }
        });

        this.setState({ need: [...needCheckedItems] });

        this.props.dispatch(setNeedFilter(needCheckedItems));
    };

    _onTypeSelect = ( item ) => {
        typeCheckedItems = [];

        item.map((child) => {
            if (child.RNchecked === true) {
                typeCheckedItems.push(child.value);
            }
        });

        this.setState({ listingType: [...typeCheckedItems] });

        this.props.dispatch(setListingTypeFilter(typeCheckedItems));
    };

    _onPriceSelect = ( item ) => {
        priceCheckedItems = [];

        item.map((child) => {
            if (child.RNchecked === true) {
                priceCheckedItems.push(child.value);
            }
        });

        priceCheckedItems = priceCheckedItems.toString().split(',')
        let priceRange = [parseInt(priceCheckedItems[0]), parseInt(priceCheckedItems[priceCheckedItems.length - 1])];
        this.setState({ priceRange });
        this.props.dispatch(setPriceFilter(priceRange));
    };

    render() {
        return(
            <NativeRouter>
                <View>
                    <View style = {styles.Container}>
                        <View style = {styles.listText}>
                            <Text style = {{ fontSize:20 }}>Your Listings</Text>
                            <Text style = {{ color: '#777' }}>({this.props.listings.length})</Text>
                        </View>

                        {/* Filter button */}
                        <View style = {styles.filterApply}>
                            <TouchableOpacity style = {styles.ButtonEffects}>
                                <Button 
                                title ='Filters' 
                                color = '#C94343' 
                                accessibilityLabel = 'apply filters' 
                                style = {styles.ButtonEffects}
                                onPress={() => {
                                    this.setState({ mainVisible: true });
                                }}
                                />

                                {/* Main dialog popup */}

                                <Dialog
                                    visible={this.state.mainVisible}
                                    footer={
                                        <DialogFooter>
                                          <DialogButton
                                            text="APPLY"
                                            textStyle={{ color: '#C94343' }}
                                            onPress={() => {
                                                this.setState({ mainVisible: false });
                                            }}
                                          />
                                        </DialogFooter>
                                    }
                                    dialogAnimation={new SlideAnimation({
                                        slideFrom: 'bottom',
                                      })}
                                    onTouchOutside={() => {
                                    this.setState({ mainVisible: false });
                                    }}
                                >
                                    <DialogContent>
                                        <View style = {styles.DialogContainer}>
                                            <View style = {styles.DialogOpt}>
                                                <CheckboxFormX 
                                                dataSource={this.filterData}
                                                style = {{ padding: 5, margin: 0 , fontSize : 50 }}
                                                itemShowKey="label"
                                                itemCheckedKey="RNchecked"
                                                iconSize={27}
                                                iconColor='#CC4F4F'
                                                formHorizontal={false}
                                                labelHorizontal={true}
                                                onChecked={(item) => this._onSelect(item)}
                                                />
                                            </View>

                                            <View style = {styles.DialogDropdown}>
                                            <TouchableHighlight
                                            disabled={this.state.checkedItems.includes('Need') ? false : true}
                                            underlayColor='none'
                                            onPress = {() => {
                                                this.setState({ needVisible: true });
                                            }}
                                            >
                                                <Image source={DownArrow} resizeMode='contain' style={{ width: 25, height: 25, marginBottom: 6 }} />
                                            </TouchableHighlight>
                                            <Dialog
                                                visible={this.state.needVisible}
                                                footer={
                                                    <DialogFooter>
                                                      <DialogButton
                                                        text="CLEAR"
                                                        textStyle={{ color: '#C94343' }}
                                                        onPress={() => {
                                                            const clearedData = this.needData.map((child) => {
                                                                return {
                                                                    ...child,
                                                                    RNchecked: false
                                                                };
                                                            });

                                                            this.needData = [...clearedData];

                                                            this._onNeedSelect(this.needData);
                                                        }}
                                                      />
                                                    </DialogFooter>
                                                }
                                                dialogAnimation={new ScaleAnimation({
                                                    initialValue: 0, // optional
                                                    useNativeDriver: true, // optional
                                                  })}
                                                onTouchOutside={() => {
                                                this.setState({ needVisible: false });
                                                }}>
                                                    <DialogContent>
                                                        <View style = {styles.DialogContainer}>
                                                        <View style = {styles.DialogOpt}>
                                                            <CheckboxFormX 
                                                            dataSource={this.needData}
                                                            style = {{ padding: 5, margin: 0 , fontSize : 50}}
                                                            itemShowKey="label"
                                                            itemCheckedKey="RNchecked"
                                                            iconSize={27}
                                                            iconColor='#CC4F4F'
                                                            formHorizontal={false}
                                                            labelHorizontal={true}
                                                            onChecked={(item) => this._onNeedSelect(item)}
                                                            />
                                                        </View>
                                                        </View>
                                                    </DialogContent>
                                            </Dialog>

                                            <TouchableHighlight
                                            underlayColor='none'
                                            disabled={this.state.checkedItems.includes('Type') ? false : true}
                                            onPress = {() => {
                                                this.setState({ typeVisible: true });
                                            }}>
                                                    <Image source={DownArrow} resizeMode='contain' style={{ width: 25, height: 25, marginBottom: 6 }} />
                                            </TouchableHighlight>

                                            <Dialog
                                                visible={this.state.typeVisible}
                                                footer={
                                                    <DialogFooter>
                                                      <DialogButton
                                                        text="CLEAR"
                                                        textStyle={{ color: '#C94343' }}
                                                        onPress={() => {
                                                            const clearedData = this.typeData.map((child) => {
                                                                return {
                                                                    ...child,
                                                                    RNchecked: false
                                                                };
                                                            });

                                                            this.typeData = [...clearedData];

                                                            this._onTypeSelect(this.typeData);
                                                        }}
                                                      />
                                                    </DialogFooter>
                                                }
                                                dialogAnimation={new ScaleAnimation({
                                                    initialValue: 0, // optional
                                                    useNativeDriver: true, // optional
                                                  })}
                                                onTouchOutside={() => {
                                                this.setState({ typeVisible: false });
                                                }}>
                                                    <DialogContent>
                                                    <View style = {styles.typeContainer}>
                                                        <View style = {styles.DialogOpt}>
                                                            <CheckboxFormX 
                                                            dataSource={this.typeData}
                                                            style = {{ padding: 5, margin: 0 , fontSize : 50}}
                                                            itemShowKey="label"
                                                            itemCheckedKey="RNchecked"
                                                            iconSize={27}
                                                            iconColor='#CC4F4F'
                                                            formHorizontal={false}
                                                            labelHorizontal={true}
                                                            onChecked={(item) => this._onTypeSelect(item)}
                                                            />
                                                        </View>
                                                        </View>
                                                    </DialogContent>
                                            </Dialog>

                                            <TouchableHighlight
                                            underlayColor='none'
                                            disabled={this.state.checkedItems.includes('Price') ? false : true}
                                            onPress = {() => {
                                                this.setState({ priceVisible: true });
                                            }}>
                                                    <Image source={DownArrow} resizeMode='contain' style={{ width: 25, height: 25, marginBottom: 6 }} />
                                            </TouchableHighlight>
                                            <Dialog
                                                visible={this.state.priceVisible}
                                                footer={
                                                    <DialogFooter>
                                                      <DialogButton
                                                        text="CLEAR"
                                                        textStyle={{ color: '#C94343' }}
                                                        onPress={() => {
                                                            let clearedData = this.priceRentData.map((child) => {
                                                                return {
                                                                    ...child,
                                                                    RNchecked: false
                                                                };
                                                            });
                                                            this.priceRentData = [...clearedData];
                                                            this._onPriceSelect(this.priceRentData);

                                                            clearedData = this.priceOutrightData.map((child) => {
                                                                return {
                                                                    ...child,
                                                                    RNchecked: false
                                                                };
                                                            });
                                                            this.priceOutrightData = [...clearedData];
                                                            this._onPriceSelect(this.priceOutrightData);

                                                            this.setState({ priceRange: [0, Infinity] });
                                                            this.props.dispatch(setPriceFilter([0, Infinity]));
                                                        }}
                                                      />
                                                    </DialogFooter>
                                                }
                                                dialogAnimation={new ScaleAnimation({
                                                    initialValue: 0, // optional
                                                    useNativeDriver: true, // optional
                                                  })}
                                                onTouchOutside={() => {
                                                this.setState({ priceVisible: false });
                                                }}>
                                                    <DialogContent>
                                                    <View style = {styles.priceDialog}>
                                                        <View style = {styles.priceRent}>
                                                            <Text style = {{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>Rent</Text>
                                                            <CheckboxFormX 
                                                            dataSource={this.priceRentData}
                                                            style = {{ padding: 5, margin: 0 , fontSize : 50 }}
                                                            itemShowKey="label"
                                                            itemCheckedKey="RNchecked"
                                                            iconSize={27}
                                                            iconColor='#CC4F4F'
                                                            formHorizontal={false}
                                                            labelHorizontal={true}
                                                            onChecked={(item) => this._onPriceSelect(item)}
                                                            />
                                                        </View>
                                                        <View style = {styles.priceOutRight}>
                                                            <Text style = {{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>Outright</Text>
                                                            <CheckboxFormX 
                                                            dataSource={this.priceOutrightData}
                                                            style = {{ padding: 5, margin: 0 , fontSize : 50 }}
                                                            itemShowKey="label"
                                                            itemCheckedKey="RNchecked"
                                                            iconSize={27}
                                                            iconColor='#CC4F4F'
                                                            formHorizontal={false}
                                                            labelHorizontal={true}
                                                            onChecked={(item) => this._onPriceSelect(item)}
                                                            />
                                                        </View>
                                                        </View>
                                                    </DialogContent>
                                            </Dialog>
                                            <TouchableHighlight 
                                            underlayColor='none'
                                            onPress = {() => {
                                                this.setState({ carpetVisible: true });
                                            }}>
                                                <Image source={DownArrow} resizeMode='contain' style={{ width: 25, height: 25, marginBottom: 6 }} />
                                            </TouchableHighlight>
                                            <Dialog
                                                visible={this.state.carpetVisible}
                                                footer={
                                                    <DialogFooter>
                                                      <DialogButton
                                                        text="APPLY"
                                                        textStyle={{ color: '#C94343' }}
                                                        onPress={() => {
                                                            this.setState({ carpetVisible: false });
                                                        }}
                                                      />
                                                    </DialogFooter>
                                                }
                                                dialogAnimation={new ScaleAnimation({
                                                    initialValue: 0, // optional
                                                    useNativeDriver: true, // optional
                                                  })}
                                                onTouchOutside={() => {
                                                this.setState({ carpetVisible: false });
                                                }}>
                                                    <DialogContent>
                                                    <View style = {styles.DialogContainer}>
                                                        <View style = {styles.DialogOpt}>
                                                        </View>
                                                        </View>
                                                    </DialogContent>
                                            </Dialog>
                                        </View>
                                        </View>
                                    </DialogContent>
                                </Dialog>

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </NativeRouter>
        );
    };
}

const styles = StyleSheet.create ({
    Container : {
        flexDirection: 'row',
        height : 50,
        margin: 5,    
    },

    listText : {
        alignItems : 'flex-start',
        marginTop : 10,
        marginLeft : 15,
    },

    RefreshButton : {
        flex : 1,
        alignItems : 'center',
        paddingRight : 80
        
    },

    filterApply : {
        flex : 2,
        alignItems : 'flex-end',
        margin : 5,
        paddingRight : 20
    },

    ButtonEffects : {
        borderWidth : 1,
        borderColor : '#e3eff0',
        borderRadius : 5,
        fontSize : 20
    },

    DialogContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:170,
        height:200,
    },

    DialogOpt: {
        marginTop: 25,
        flex: 1,
    },

    DialogDropdown: {
        flex: 1,
        paddingBottom: 20,
        paddingLeft: 50,
    },

    typeContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:170,
        height:360,
    },

    priceDialog: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:275,
        height:375,
        marginBottom: 10,
    },

    priceRent:{
        flex:1,
        marginTop:10,
    },

    priceOutRight: {
        flex:1,
        marginTop:10,
    },
});

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    };
};

export default connect(mapStateToProps)(Filters);

AppRegistry.registerComponent('Filters', () =>  Filters);
