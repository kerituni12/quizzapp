import React, { Component } from 'react';
import { View,Text, Button } from 'react-native';

export default class WelcomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Login" onPress={() => this.props.navigation.navigate('Dashboard')} />
          <Button title="Sign Up" onPress={() => alert('button pressed')} />
        </View>
      );
    }
  }

export const Detail = props => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail</Text>
    </View>
  );
  export const Clone = props => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
    </View>
  );

