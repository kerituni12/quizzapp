import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import firebase from 'react-native-firebase';

import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';


export default class Login extends Component {
    
    sate = {
        logged : false,
    }
    onLoginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                //console.log(`result  ${JSON.stringify(result)}`)
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                
                return AccessToken.getCurrentAccessToken();

            })
            .then(data => {
                //console.log(data);
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);      
                return firebase.auth().signInWithCredential(credential);
                
            })
            .then((currentUser) => {
                console.log(currentUser);
                firebase.database().ref(`/users/${currentUser.uid}/profile`).set({
                    name: currentUser.displayName,
                    email: currentUser.email,
                    avatar: currentUser.photoURL
                });    
                //console.log(`Facebook Login with user : ${JSON.stringify(currentUser)}`);   
                     
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }


    async loginWithFacebook () {
        try{
            console.log('outside login manager')
        LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
            console.log(result)
            if(result.isCancelled) {
                console.log('Login cancelado')
            } else {
                console.log(`Login success ${result.grantedPermissions.toString()}`)
            }
        })
        }catch{
            alert(error);
        }
        
    }


    render(){
        return (
            <View>
                <TouchableHighlight onPress={this.onLoginFacebook}>
                    <Text>Login with Facebook</Text>
                </TouchableHighlight>
            </View>
        )
    }
}