import React, { Component } from 'react';
import { View,Text, Button,AsyncStorage } from 'react-native';
import {AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
export default class WelcomeScreen extends Component {
  
  state = {    
    logout : true,
  }
  
  // check = () => {
  //   console.log('da chay');
  //   value = AsyncStorage.getItem('@name:key'); 

  //      if (value === null ) {
  //         console.log(value);        
  //         return true;
  //      } 
  //      return false;            
        
  // }

  _storeData = async (name,avatar) => {
    try {
      await AsyncStorage.setItem('@name:key', name);
      await AsyncStorage.setItem('@avatar:key', avatar);
      alert('save ok');
    } catch (error) {
      // Error saving data
    }
  };
 
  check = () =>{    
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'null'); 
     console.log(itemId + typeof itemId); 
       s = JSON.stringify(itemId);
      //value =  AsyncStorage.getItem('@name:key');  
      console.log('this value' + value);
      if (value !==null){
        this.setState({logout:false})
        //this.props.navigation.native('Dashboard');break;
      } else if (s == 1 ) {
        console.log(typeof s);        
        this.setState({logout:true}) 
         
      }
      return true;
  };

  
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
          console.log(currentUser.user);
          this.state.lan += 1;

        // save to firebase
        //   firebase.database().ref(`/users/${currentUser.user._user.uid}/profile`).set({
        //     name: currentUser.user._user.displayName,
        //     email: currentUser.user._user.email,
        //     avatar: currentUser.user._user.photoURL
        // }); 
        
        this._storeData(currentUser.user._user.displayName,currentUser.user._user.photoURL);
            this.setState ({logout : false})     ;
            //console.log(this.state.logged)  ;  
            this.props.navigation.navigate('Dashboard')  
        })
        .catch((error) => {
            console.log(`Facebook login fail with error: ${error}`);
        });}   
        
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

  logOut =()=>{
    LoginManager.logOut();
  }

    render() {
     
      return (
      
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
        {
         this.state.logout === true ?(<View>
                <Button 
                title="Login"
                onPress={()=>this.onLoginFacebook()}/>
              </View>)
         :  this.props.navigation.navigate('Dashboard')         
        
        }
        </View> 
      )
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

