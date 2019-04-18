import React, { Component } from 'react';
import { Text,View, Button,StyleSheet,TouchableOpacity,Image } from 'react-native';
import images from '../../utils/Images';
import QuizScreen from '../../components/QuizScreen';
export default class Feed extends Component {
    state = {
        topics: [
            {key:'books'},
            {key:'sports'},
            {key:'animals'},
            {key:'history'},
            {key:'tv'},
            {key:'geography'},
            {key: 'mythology'},
            {key: 'music'},
        ]
    }

    _handleNextPress(category) {
        this.nextRoute.passProps.url = category
        this.props.navigation.navigate('Quiz', {
            url: category
        })
    }

    nextRoute = {
        component: QuizScreen,
        title: 'Quiz',
        passProps: { url: 'sports' }
    };

    render() {
        return (
            
            <View style={styles.MenuScreen}>
                {this.state.topics.map(item => {
                    return (
                        <View key={item.key} style={styles.CategoryContainer}>
                            <TouchableOpacity 
                                style={styles.Category} 
                                onPress={() => {this._handleNextPress(item.key)}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image style={{height: '100%', width: '100%'}} source={images[item.key]} />
                                    </View>
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', padding: 5, color: '#FFF', fontSize: 14, fontWeight: 'bold'}}>
                                <Text style={{color: '#FFFDE7', fontSize: 14, fontWeight: 'bold'}}>
                                    {item.key}
                                </Text>
                            </View>
                        </View>
                    )
                })}
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    MenuScreen: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#39C5D6',
        // borderWidth: 1,
        // borderColor: 'green',
        padding: 10,
        marginTop: 0
    },
    CategoryContainer: {
        width: '33.33%',
        height: '25%',
        // borderWidth: 1,
        // borderColor: '#000',
        justifyContent: 'center',
        alignItems:'center'
    },
    Category: {
        height: 62.5,
        width: 62.5,
        margin: 2,
        justifyContent: 'center',
        borderRadius: 15,
        // borderWidth: 2,
        // borderColor: '#FBC02D',
        // backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }                                    
  });
  