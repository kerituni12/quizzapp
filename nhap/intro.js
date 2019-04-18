import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

class Home extends Component{
  static navigationOptions ={
    headerStyle:{
      backgroundColor:'blue'
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}
class Dashboard extends Component{
  static navigationOptions ={
    headerStyle:{
      backgroundColor:'black'
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    )
  }
}
const AppStackNavigation = createStackNavigator({
  Home:Home
});
const AppDrawerNavigator =createDrawerNavigator({
  Home:Home,
  Dashboard:Dashboard
});
const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})