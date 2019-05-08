import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Doc extends Component {
    render() {
        return (
            <View style={styles.container}> 
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>Math</Text>
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>Physics</Text>
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>Chemistry</Text>
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>Biology</Text>
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>Literature</Text>
                    <Text style={styles.cateName} onPress={()=>this.props.navigation.navigate('Flat')}>English</Text>
                   
            </View>
        );
    }
}
export default Doc;

const styles = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: '#3366FF',
      
    },  
    
    cateName: {
      color :'green',
      backgroundColor:'#fff',      
      borderWidth: 1,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
      borderRadius: 20,
    }
    
    
  });