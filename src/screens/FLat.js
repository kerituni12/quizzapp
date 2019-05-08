
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { green } from 'ansi-colors';

export default class Flat extends Component {

  state = {
    users: []
  }

   componentDidMount() {    
    return fetch('https://tuhocplus.com/db.json')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
      this.setState({
        users: responseJson.cate
      });
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  fun(){
    this.props.na
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.cateName}
                   onPress={() => navigate('PDF', { name: item.cateName })}
          title="Go to Brent's profile">{item.cateName}</Text>            
          </View>
          }
          keyExtractor={item => item.cateName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,      
    backgroundColor: '#3366FF',
  },  
  
  cateName: {
    color :'black',
    backgroundColor:'#fff',      
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
  }
  
});