import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,TouchableOpacity
} from "react-native";
import styles from './styles'
export default class Button extends Component {
    render() {
        return (
            <View style={styles.row}>
            <TouchableOpacity  onPress={()=>this.props.onPress('hieu')}>
                <View>
                    <Text style={styles.button} >Hello</Text>
                </View>                            
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>alert('hello')}>
                <View>
                    <Text style={styles.button} >Hello</Text>
                </View>                            
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>alert('hello')}>
                <View>
                    <Text style={styles.button} >Hello</Text>
                </View>                            
            </TouchableOpacity>
        
        </View>
        );
    }
}

