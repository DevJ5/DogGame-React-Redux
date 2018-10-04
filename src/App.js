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
  addShownBreeds,
  addTenCoins,
  getAllBreeds,
  getThreeRandomImages
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
    this.nextQuestion();
  }

  getThreeRandomImages() {
    request.get('https://dog.ceo/api/breeds/image/random/3').then(res => {
      this.props.getThreeRandomImages(res.body.message);
    });
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
    const styleBool = Math.floor(Math.random() * 2);
    this.props.gameStyle(styleBool);
    styleBool ? this.getQuestion() : this.getThreeRandomImages();
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
    this.props.addShownBreeds(correctBreedName);
  }

  addTenCoins() {
    this.props.addTenCoins();
  }

  WrongButton(userFeedBack) {
    this.resetWinStreak();
    userFeedBack.wrongAnswersStyles();

    setTimeout(() => {
      userFeedBack.defaultStyles();

      this.nextQuestion();
    }, 2000);
  }

  RightButton(userFeedBack) {
    this.incrementScore();
    this.incrementWinStreak();
    this.addTenCoins();

    userFeedBack.rightAnswerStyles();

    setTimeout(() => {
      userFeedBack.defaultStyles();

      this.nextQuestion();
    }, 750);
  }

  handleClick = e => {
    e.preventDefault();
    console.log(e);

    const correctBreed = this.props.correctBreedObj.name;
    const targetValue = e.target.value.toLowerCase();
    const userFeedBack = new userFeedback(
      document.getElementById('button-' + correctBreed),
      document.getElementById('button-' + targetValue)
    );

    this.incrementQuestionsAsked();
    this.addToShownBreeds(correctBreed);

    if (targetValue === correctBreed) {
      this.RightButton(userFeedBack);
    } else {
      this.WrongButton(userFeedBack);
    }
  };

  render() {
    return (
      <div className="Container">
        {/*<Movie />*/}
        <Header />
        {this.props.gameStyleBool ? <ImageContainer /> : <ImageAsAnswers />}
        <Neck />
        {this.props.gameStyleBool ? <ButtonsContainer onClick={this.handleClick} /> : <OnlyTextAsQuestion />}
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreedObj, allBreeds, gameStyleBool }) => ({
  correctBreedObj,
  allBreeds,
  gameStyleBool
});

const mapDispatchToProps = {
  addToNumberOfQuestionsAsked,
  addToScore,
  addToWinStreak,
  getAnswers,
  resetWinStreak,
  setAllBreeds,
  setCorrectBreed,
  getAllBreeds,
  addShownBreeds,
  addTenCoins,
  getThreeRandomImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
