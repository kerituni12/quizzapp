import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,AsyncStorage,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";
import {DrawerItems,SafeAreaView } from 'react-navigation'
import { LoginManager } from 'react-native-fbsdk';

class componentName extends Component {
  state ={
    name :'',
    avatar: null
  }
  _retrieveData = async () => {
    try {
      value = await AsyncStorage.getItem('@name:key');
      avatar = await AsyncStorage.getItem('@avatar:key');
      if (value !== null) {
        // We have data!!
       this.setState({name:value, avatar:avatar})
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  
    render() {
      this._retrieveData();
        return (
            <View style={{flex:1}}>
         
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            
              <View style={{height:100,backgroundColor:'#99FFCC',justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:50,height:50,borderRadius:50}} source={{uri:this.state.avatar}} />
                <Text>{this.state.name}</Text>
              </View>
                        
            <DrawerItems {...this.props} />
            <TouchableOpacity onPress={()=>{
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => { 
                    AsyncStorage.clear();                   
                    LoginManager.logOut();
                    this.props.navigation.navigate('Welcome', {itemId:1});
                  }},
                ],
                { cancelable: false }
              );
              //props.navigation.navigate('Welcome') ;  
            }              
            }>
            
              <Text style={{margin: 16,fontWeight: 'bold',}}>Logout</Text>
            </TouchableOpacity>
          </SafeAreaView>
      </View>
        );
    }
}
export default componentName;
