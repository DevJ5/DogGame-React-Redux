import './App.css';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import {Main} from './components/Main';
import Footer from './components/Footer';

import {
  addToNumberOfQuestionsAsked,
  addToScore,
  getAnswers,
  setAllBreeds,
  setCorrectBreed,
  addToScore,
  addToNumberOfQuestionsAsked,
  currentStreak
} from './actions/AppActions';
import userFeedback from './functions/userFeedback';
import Header from './components/Header';

class App extends PureComponent {
  componentDidMount() {
    request.get('https://dog.ceo/api/breeds/list/all').then(res => {
      this.props.dispatch(setAllBreeds(res.body.message));
    });
    this.getQuestion();
  }

  getQuestion() {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => this.props.dispatch(setCorrectBreed(res.body.message)))
      .then(() => {
        this.props.dispatch(
          getAnswers(this.props.correctBreed.name, this.props.allBreeds)
        );
      });
  }

  nextQuestion() {
    this.getQuestion();
  }

  incrementQuestionsAsked() {
    this.props.dispatch(addToNumberOfQuestionsAsked());
  }

  incrementScore() {
    this.props.dispatch(addToScore());
  }

  incremetWinStreak() {
    this.props.dispatch(currentStreak(addToWinStreak))
  }

  resetWinStreak() {
    this.props.dispatch(currentStreak(resetWinStreak))
  }

  calculateScore() {
    const score = (
      (this.props.currentScore / this.props.numberOfQuestionsAsked) *
      100
    ).toFixed(2);
    return `Score: ${score} %`;
  }

  handleClick = e => {
    e.preventDefault();
    userFeedback(
      e.target.value.toLowerCase(),
      this.props.correctBreed.name,
      this.nextQuestion.bind(this),
      this.incrementScore.bind(this),
      this.incrementQuestionsAsked.bind(this),
      this.incremetWinStreak.bind(this),
      this.calculateScore.bind(this)
    );
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Main correctBreed={this.props.correctBreed} answers={this.props.answers} onClick={this.handleClick}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreed, answers, allBreeds }) => ({
  correctBreed,
  answers,
  allBreeds
});

export default connect(mapStateToProps)(App);
