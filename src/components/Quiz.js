import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <DetailsScreen screenProps={this.props}/>
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
      </View>
    );
  }
}

export class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.screenProps.navigation.push('Home')}
        />
      </View>
    );
  }
}
