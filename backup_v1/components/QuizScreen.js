import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import Question from './Question.js';
import Options from './Options.js'
import { shuffle } from '../utils/Utils.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class QuizScreen extends React.Component {

  state = {
    quiz: [],
    counter: 0,
    url: 'https://opentdb.com/api.php?amount=20&category=27&difficulty=medium',
    urls: {
      sports: 'https://opentdb.com/api.php?amount=5&category=21&type=multiple',
      books: 'https://opentdb.com/api.php?amount=30&category=10&difficulty=medium&type=multiple',
      animals: 'https://opentdb.com/api.php?amount=15&category=27&difficulty=medium&type=multiple',
      history: 'https://opentdb.com/api.php?amount=30&category=23&difficulty=medium&type=multiple',
      tv: 'https://opentdb.com/api.php?amount=30&category=14&difficulty=medium&type=multiple',
      geography: 'https://opentdb.com/api.php?amount=30&category=22&difficulty=medium&type=multiple',
      music: 'https://opentdb.com/api.php?amount=30&category=12&difficulty=medium&type=multiple',
      art: 'https://opentdb.com/api.php?amount=30&category=22&difficulty=medium&type=multiple',
      mythology: 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'
    },
    bgColors: {
      sports: '#FBC02D',
      books: '#785549',
      animals: '#8CC152',
      history: '#FBC02D',
      tv: '#FBC02D',
      geography: '#FBC02D',
      music: '#FBC02D',
      art: '#FBC02D',
      mythology: '#FBC02D'
    },
    category: 'books',
    score: 0,
    showNext: true
  }

  componentDidMount() {
    const { navigation } = this.props;
    let category = navigation.getParam('url', 'sports')

    this.setState((prevState) => {
      const _url = prevState.urls[category] === undefined ? prevState.urls['books']:prevState.urls[category]
      return {url: _url, category}
    }, () => {
      fetch(this.state.url).then(response => {
        return response.json()
      }).then(response => {
        let _quiz = response.results
        _quiz = shuffle(_quiz)
        this.setState({
          quiz: _quiz
        })
      }).catch(err => {
        console.log(err)
      })
    })
  }

  updateState = () => {
    this.incremenetScore()
  }
  //count question
  incremenetCounter = () => {
    this.setState( (prevState)=> {
       if(prevState.counter < this.state.quiz.length - 1){
           prevState.counter += 1 ;
           prevState.showNext =true;
       }  else prevState.showNext =null
       return {
        counter: prevState.counter,
        showNext: prevState.showNext,
      }      
    })
  }

  showNext = () => {
    this.setState({
      showNext: true
    })
  }

  incremenetScore = () => {
    this.setState(prevState =>{
      let _score = prevState.counter < this.state.quiz.length - 1 ? prevState.score + 1 : prevState.score
      return {score: _score}
    })
  }

  render() {
    return (
      <View style = {[styles.QuizContainer1, {backgroundColor: this.state.bgColors[this.state.category]}]}>
        {
          this.state.quiz.length === 0 ? 
            (
              <View style={{flex: 1, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#FFFDE7" />
              </View>
            )
            :
            (
              <View style = {styles.QuizContainer2}>
                <View style={styles.InfoCardContainer}>
                  <Text style = {styles.ScoreBox}>
                    {"Score" + "\n" + this.state.score}
                  </Text>
                </View>
                <View style={styles.QuizCardContainer3}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    {/* <View style={styles.InfoCardContainer2}>
                      <View style={{flex: 1}}>
                        <Text style = {styles.CategoryBox}>
                          {this.state.category}
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style = {styles.CategoryBox}>
                          {this.state.counter + 1 + " / " + this.state.quiz.length}
                        </Text>
                      </View>
                    </View> */}
                    <View style={styles.QuizCard}>
                      <Question
                        question = {this.state.quiz[this.state.counter].question}
                      />
                      <Options
                        updateState = {this.updateState}
                        correct = {this.state.quiz[this.state.counter].correct_answer} 
                        incorrect = {this.state.quiz[this.state.counter].incorrect_answers} 
                      />
                    </View>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style = {styles.CategoryBox}>
                    {this.state.counter + 1 + " / " + this.state.quiz.length}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  {
                    this.state.showNext ? (
                      <TouchableOpacity  
                        onPress={() => { this.incremenetCounter() }}>
                            <Icon name="check" size={48} color="#FFFDE7" />
                      </TouchableOpacity>
                    ) : 
                    null
                  }
                </View>
              </View>
            )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  QuizContainer1: {
    flex: 1,
    // backgroundColor: QuizScreen.state.bgColors.sports, //'#41C6E6', //'#FBC02D',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
  },
  QuizContainer2: {
    marginTop: 0,
    paddingTop: 0,
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#FBC02D',
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
  },
  QuizCardContainer3: {
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: '#000',
    flex: 5,
    margin: 10,
    marginTop: 0,
    // backgroundColor: '#FFFDE7',
    flexDirection: 'row',
    color: '#444444'
  },
  QuizCard: {
    flex: 8,
    padding: 5,
  },
  InfoCardContainer2: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#000",
    flex: 1,
    flexDirection: 'row',
  },
  InfoCardContainer: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#000",
    elevation: 1,
    flex: 1.3,
    flexDirection: 'row',
    width: 200,
    margin: 5,
    marginBottom: 5
  },
  Box: {
    textAlign:'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
    padding: 5,
    margin: 5,
    flex: 1
  },
  ScoreBox: {
    textAlign:'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
    color: '#FFFDE7',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    margin: 10,
    flex: 1
  },
  CategoryBox: {
    textAlign:'center',
    borderWidth: 2,
    borderRadius: 18,
    borderColor: 'transparent',
    padding: 2,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});