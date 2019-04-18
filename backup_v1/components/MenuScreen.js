import React from 'react'
import { View, Image, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import QuizScreen from './QuizScreen.js'
import { LinearGradient } from 'expo';
import images from '../utils/Images.js'

export default class MenuScreen extends React.Component {

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
            <LinearGradient
                colors={['#3BBED7', '#30DACC', '#2EECCA']}
                start={[0.1, 0.1]}
                // end={[1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    marginTop: 65,
                    height:'100%',
                }}
            >
            <View style={styles.MenuScreen}>
                {this.state.topics.map(item => {
                    return (
                        <View style={styles.CategoryContainer}>
                            <TouchableOpacity 
                                style={styles.Category} 
                                onPress={() => {this._handleNextPress(item.key)}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image stlye={{height: '100%', width: '100%'}} source={images[item.key]} />
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
            </LinearGradient>
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
  