import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import decode from '../utils/Unescape.js';

export default class Question extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Question}>
            {console.log(decode.chars)}
            {decode(this.props.question)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10
  },
  Question: {
    // marginBottom: 10,
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
    // flex: 3
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'

  },
});