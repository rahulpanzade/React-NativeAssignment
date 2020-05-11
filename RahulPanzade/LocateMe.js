import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';


export default class LocateMe extends React.Component {
  state = {
    location: null
  };

  constructor(){
    super();
      this.findCoordinates();      
  };

  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  };

  findCoordinates = () => Geolocation.getCurrentPosition(
    //Will give you the current location
    (position) => {
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      const location = 'http://maps.google.co.in/maps?q=' + currentLatitude + ',' + currentLongitude;

      this.setState({ location });
    },
    (error) => alert(error.message),
    {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
  );

  render() {
    return (
      <WebView
        source={{ uri: this.state.location == null ? 'http://maps.google.co.in/maps?' : this.state.location }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});