import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,TouchableOpacity
} from "react-native";
import styles from './StockComponent/styles';
import Button from './StockComponent/button'


export default class Appp extends Component {
    change= (name) =>{
        alert('hello'+ name);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.yellow}>
                    <Text>
                        Yellow
                    </Text>
                    <Text>
                        12000000.000
                    </Text>
                    <Text>
                        17000000.000
                    </Text>
                </View>
                <View style={styles.pink}>
                   <Button onPress={this.change}/>                        
                </View>
            </View>
        );
    }
}


