import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import Main from './components/Main';
import Footer from './components/Footer';

import {
  getAnswers,
  setAllBreeds,
  setCorrectBreed,
  scoreChecker,
  currentStreak,
  addToScore,
  addToNumberOfQuestionsAsked
} from './actions/AppActions';

import { Buttons } from './components/Buttons';
import { Image } from './components/Image';
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


  calculateScore() {
    const score = (
      (this.props.currentScore / this.props.numberOfQuestionsAsked) *
      100
    ).toFixed(2);
    return `Score: ${score} %`;

  incrementCurrentStreak(){
    this.props.dispatch(currentStreak())
  }

  cleanWinStreak(){
    this.props.dispatch()

  }

  handleClick = e => {
    e.preventDefault();
    userFeedback(
      e.target.value.toLowerCase(),
      this.props.correctBreed.name,
      this.nextQuestion.bind(this),
      this.incrementScore.bind(this),
      this.incrementQuestionsAsked.bind(this)
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {this.props.correctBreed && (
          <Image correctBreed={this.props.correctBreed} />
        )}
        {this.props.answers.length > 0 && (
          <Buttons answers={this.props.answers} onClick={this.handleClick} />
        )}
        <Footer />
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
