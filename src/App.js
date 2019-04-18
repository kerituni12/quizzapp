import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native"; 

import {Provider} from 'react-redux';
import Login from './screens/Login';
import Chat from './screens/Chat';
import store from './store';

class componentName extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
            
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});