import './App.css';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import Footer from './components/Footer';

import {
  addToNumberOfQuestionsAsked,
  addToScore,
  addToWinStreak,
  getAnswers,
  resetWinStreak,
  setAllBreeds,
  setCorrectBreed
} from './actions/AppActions';

import gameLogic from './functions/gameLogic';
import Header from './components/Header';
import {Game} from "./components/Game";

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

  incrementWinStreak() {
    this.props.dispatch(addToWinStreak());
  }

  resetWinStreak() {
    this.props.dispatch(resetWinStreak());
  }

  calculateScore() {
    const score = parseInt((
      (this.props.currentScore / this.props.numberOfQuestionsAsked) *
      100
    ).toFixed(2));
    return isNaN(score) ? 0 : score;
  }

  handleClick = e => {
    e.preventDefault();

    gameLogic(
      e.target.value.toLowerCase(),
      this.props.correctBreed.name,

      this.nextQuestion.bind(this),

      this.incrementScore.bind(this),
      this.incrementQuestionsAsked.bind(this),

      this.incrementWinStreak.bind(this),
      this.resetWinStreak.bind(this)
    );
  };

  render() {
    return (
      <div className={'App'}>
        <Header/>
        <Game score={this.calculateScore()} correctBreed={this.props.correctBreed} answers={this.props.answers}
              onClick={this.handleClick} streak={this.props.currentStreak}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({
                           correctBreed,
                           answers,
                           allBreeds,
                           currentScore,
                           numberOfQuestionsAsked,
                           currentStreak
                         }) => ({
  correctBreed,
  answers,
  allBreeds,
  currentScore,
  numberOfQuestionsAsked,
  currentStreak
});

export default connect(mapStateToProps)(App);
