import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {connect} from 'react-redux';
import { statement } from "@babel/template";


class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Login </Text>
            </View>
        );
    }
}


const map = (state) => {
   return {
       loggedIn : state.Auth.loggedIn,
       user : state.Auth.user
   };
}

export default connect(map)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'red',
    }
});