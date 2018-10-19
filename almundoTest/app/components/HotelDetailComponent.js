import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, ActivityIndicator } from 'react-native';

export default class HotelDetailComponent extends Component{
  render(){
    const { data } = this.props.navigation.state.params.data

    return (
      <View>
        <Text>{data.hotel_name}</Text>
        <Text>{data.stars}</Text>
        <Text>{data.price}</Text>
      </View>
  }

}
