import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

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
import Game from './components/Game';
import Footer from './components/Footer';

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
      <div className="App">
        <Header />
        <Game handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreed, allBreeds }) => ({
  correctBreed,
  allBreeds
});

export default connect(mapStateToProps)(App);
