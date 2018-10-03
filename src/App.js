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
  setCorrectBreed,
  getAllBreeds,
  addShownBreeds
} from './actions/AppActions';

import userFeedback from './functions/userFeedback';
import ImageContainer from './containers/ImageContainer';
import ButtonsContainer from './containers/ButtonsContainer';

import { Header } from './components/Header';
import { Neck } from './components/Neck';
import { Movie } from './components/Movie';

class App extends PureComponent {
  componentDidMount() {
    this.props.getAllBreeds();
    this.getQuestion();
  }

  getQuestion() {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => this.props.setCorrectBreed(res.body.message))
      .then(() => {
        this.props.getAnswers(
          this.props.correctBreedObj.name,
          this.props.allBreeds
        );
      });
  }

  nextQuestion() {
    this.getQuestion();
  }

  // Actions
  incrementQuestionsAsked() {
    this.props.addToNumberOfQuestionsAsked();
  }

  incrementScore() {
    this.props.addToScore();
  }

  incrementWinStreak() {
    this.props.addToWinStreak();
  }

  resetWinStreak() {
    this.props.resetWinStreak();
  }
  
    addToShownBreeds(correctBreedName) {
    this.props.dispatch(addShownBreeds(correctBreedName))
  }

  // On Button click
  handleClick = e => {
    e.preventDefault();

    const correctBreed = this.props.correctBreedObj.name;
    const targetValue = e.target.value.toLowerCase();
    const userFeedBack = new userFeedback(
      document.getElementById('button-' + correctBreed),
      document.getElementById('button-' + targetValue)
    );

    this.incrementQuestionsAsked();
    this.addToShownBreeds(correctBreed);

    if (targetValue === correctBreed) {
      // Correct answer given -> Show something green
      this.incrementScore();
      this.incrementWinStreak();

      userFeedBack.rightAnswerStyles();

      setTimeout(() => {
        userFeedBack.defaultStyles();

        this.nextQuestion();
      }, 750);
    } else {
      // Wrong answer given -> Show something red and wait 2 seconds
      this.resetWinStreak();
      userFeedBack.wrongAnswersStyles();

      setTimeout(() => {
        userFeedBack.defaultStyles();

        this.nextQuestion();
      }, 2000);
    }
  };

  render() {
    return (
      <div className="Container">
        <Movie />
        <Header />
        <ImageContainer />
        <Neck />
        <ButtonsContainer onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreedObj, allBreeds }) => ({
  correctBreedObj,
  allBreeds
});

export default connect(
  mapStateToProps,
  {
    addToNumberOfQuestionsAsked,
    addToScore,
    addToWinStreak,
    getAnswers,
    resetWinStreak,
    setAllBreeds,
    setCorrectBreed,
    getAllBreeds
  }
)(App);
