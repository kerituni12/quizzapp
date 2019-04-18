import React, { Component } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Share} from 'react-native';

export default class Results extends React.Component{
    state = {
      score:0,
      data:[
        {key:'Play Again'},
        {key:'Share Score'},
        {key:'Rate Us'}
      ],
    }
    // componentDidMount() {
    //   const { navigation } = this.props;
    //   let score = navigation.getParam('score', 6)
    //   console.log(score);
  
    //   this.setState(prevState =>{
    //     let _score = score;
    //     return {score: _score}
    //   })
    //}

    _onClick = () => {
      Share.share({
        message: 'Vào thi cùng tôi nào !!!',
        url: 'http://www.facebook.com',
        title: 'Wow, did you see that?'
      }, {
        // Android only:
        dialogTitle: 'Share score now',
        // iOS only:
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      })
    }

    check = (key) =>{
      console.log('key');
      if(key === 'Play Again') this.props.updateState();
      else if (key ==='Share Score') this._onClick();
        
      //return this.props.router;
    }
    render(){
      return(
        <View style={styles.container}>         
          <View style={{alignItems:'center', alignContent: 'center',}}>
              <Text >Your Score</Text>
              <View style={styles.score}>
                <Text>{this.props.score}</Text>
              </View>
              
          </View>
          <FlatList
            data={this.state.data}            
            renderItem={({item}) => 
            <View style = {styles.container_options}>
              <TouchableOpacity
                onPress={() => this.check(item.key)}
              >
                <View style = {styles.options}>
                  <Text >{item.key}</Text>
                </View>
                
              </TouchableOpacity>
              
            </View>
            
            }
          />
        </View>
        
      )    
  }
}

  const styles= StyleSheet.create({
    container:{
      //flex:1,
      //alignItems: 'center',
      //alignContent: 'center',
    },
    score :{      
      width:60,
      height:60,
      backgroundColor: "#FF9900",
      borderRadius: 50,
      padding: 20,
      alignItems: 'center',
      alignContent: 'center'
    },options :{     
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        padding:10,      
        alignItems: 'center',
        borderRadius: 18,       
        borderColor: 'transparent',
        backgroundColor: '#FFFDE7',

    },container_options:{
      flex:6
    }
  })