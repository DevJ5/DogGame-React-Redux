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
  addShownBreeds, addTenCoins
} from './actions/AppActions';

import userFeedback from "./functions/userFeedback";
import ImageContainer from "./containers/ImageContainer";
import ButtonsContainer from "./containers/ButtonsContainer";

import { Header } from "./components/Header";
import { Neck } from "./components/Neck";
import { Movie } from "./components/Movie";

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

  addToShownBreeds(correctBreedName) {
    this.props.dispatch(addShownBreeds(correctBreedName))
  }

  addTenCoins() {
    this.props.dispatch(addTenCoins())
  }

  handleClick = e => {
    e.preventDefault();

    const correctBreed = this.props.correctBreed.name;
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
      this.addTenCoins();

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
        <Movie/>
        <Header/>
        <ImageContainer/>
        <Neck/>
        <ButtonsContainer onClick={this.handleClick}/>
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreed, allBreeds }) => ({
  correctBreed,
  allBreeds
});

export default connect(mapStateToProps)(App);
