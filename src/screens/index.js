import React, { Component } from 'react';
import { View,Text, Button,TouchableOpacity,Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class WelcomeScreen extends Component {
  
  state = {    
    logout : true,
  }
  
  _storeData = async (name,avatar) => {
    try {
      await AsyncStorage.setItem('@name:key', name);
      await AsyncStorage.setItem('@avatar:key', avatar);
      // alert('save ok');
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

        //save to firebase
          firebase.database().ref(`/users/${currentUser.user._user.uid}/profile`).set({
            name: currentUser.user._user.displayName,
            email: currentUser.user._user.email,
            avatar: currentUser.user._user.photoURL
        }); 
        
        this._storeData(currentUser.user._user.displayName,currentUser.user._user.photoURL);
            this.setState ({logout : false})     ;
            //console.log(this.state.logged)  ;  
            this.props.navigation.navigate('Dashboard')  ;
        })
        .catch((error) => {
            console.log(`Facebook login fail with error: ${error}`);
        });} 

        
    render() {
     
      return (      
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#1adff7'}}>         
        {
         this.state.logout === true ?(<View>
        <Image
              style={{height:100,width:100,alignSelf:'center'}}
              source={{uri:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/59685937_2362749297383070_3577093916547088384_n.jpg?_nc_cat=105&_nc_oc=AQlr-zAWksTlaZcUIQIng5vtA9Z_a02GmZsXWL9UqQj_IoIPCZr-DU9GV1Er6JSUXyBwZJfBe9dnrA3j7xjLSm4g&_nc_ht=scontent.fsgn5-2.fna&oh=c92875b7fd8a1597c8484cbe68bc8ee3&oe=5D5FE167'}}
              />
          <TouchableOpacity style={{padding:10, backgroundColor: '#fff',marginTop:40, borderRadius:5 }}
          onPress={() => this.onLoginFacebook()}
          >
          <Text ><Icon style={{fontSize:20 }}  name='facebook'/>   Login With Facebook</Text>
          </TouchableOpacity>
          
          <Text style={{margin:20, alignSelf:'center'}}> --------------- OR ---------------</Text>
          <TouchableOpacity style={{padding:10, backgroundColor: '#fff',  borderRadius:5 }}
          onPress={() => this.props.navigation.navigate('Dashboard')}
          >
          <Text ><Icon style={{fontSize:20 }}  name='user'/>        Play as Guest</Text>
          </TouchableOpacity>          
              </View>
              )
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

