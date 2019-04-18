import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { shuffle } from '../utils/Utils.js';
import decode from '../utils/Unescape.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Options extends React.Component {

    initState = {
        selectedAnswer: null,
        refreshFlatList: false
    }

    state = {
        correct: 'Loading 0...',
        incorrect: ['Loading 1 ...', 'Loading 2...', 'Loading 3...'],
        options: [],
        ...this.initState
    }

    componentDidMount() {
        this.setState({
            ...this.initState
        }, this.stateManagement())
    }

    checkAnswer = (event, answer) => {
        console.log("1. checkAnswer")
        console.log(answer)
        console.log(this.state.correct)
        console.log(this.state.selectedAnswer)
        if (answer === this.state.correct) {
            this.setState({
                refreshFlatList: !this.state.refreshFlatList,
                selectedAnswer: answer
            }, this.props.updateState())
        }
    }

    componentDidUpdate(prevProps){
        console.log("componentDidUpdate")
        if (prevProps.correct !== this.props.correct) {
            this.setState({
                ...this.initState
            }, this.stateManagement())
        }
    }

    stateManagement = () => {
        _options = [
            {key: this.props.correct},
            {key: this.props.incorrect[0]},
            {key: this.props.incorrect[1]},
            {key: this.props.incorrect[2]}
        ]
        _options = shuffle(_options)
        this.setState({
            correct: this.props.correct,
            options:[..._options],
        })
    }

    render() {
        return (
            <View style={styles.container}>
            {
            this.state.options.length === 0 ? 
                (
                <View>
                    <ActivityIndicator size="large" color="#ff00ff" />
                    {console.log('length o')}
                </View>
                   
                )
                :
                (
                <View>
                {console.log('render lan 2')}
                    <FlatList
                        extraData={this.state.refreshFlatList}
                        data={this.state.options}
                        renderItem={({item}) => (
                            <View style={styles.OptionButton}>
                                <TouchableOpacity
                                    disabled={this.state.selectedAnswer && item.key === this.state.correct}
                                    style={styles.Category} 
                                    onPress={(event) => { this.checkAnswer(event, item.key) }}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{fontSize: 16}}>{decode(item.key)}</Text>
                                        </View>
                                </TouchableOpacity>
                                <View style={{position: 'absolute', height: 25, width: 25, right: 5, top: 10}}>
                                    {
                                        this.state.selectedAnswer === this.state.correct && item.key === this.state.correct ?
                                            <Icon name="check-circle" size={25} color="#83B63E" /> : null
                                    }
                                </View>
                                
                            </View>
                        )}
                    />
                </View>
                )
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
    },
    OptionButton: {
        margin: 5,
        // backgroundColor: '#FFFDE7',
    },
    Category: {
        height: 45,
        margin: 2,
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#FFFDE7', /// #F1F8EA/
    }  
})
