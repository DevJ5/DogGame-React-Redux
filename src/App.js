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
  setCorrectBreedGameUno,
  addShownBreeds,
  addTenCoins,
  getAllBreeds,
  getThreeRandomImages,
  setGameVariation
} from './actions/AppActions';

import userFeedback from './functions/userFeedback';
import ImageContainer from './containers/ImageContainer';
import ThreeImagesContainer from './containers/ThreeImagesContainer';
import ButtonsContainer from './containers/ButtonsContainer';
import QuestionContainer from './containers/QuestionContainer';

import { Header } from './components/Header';
import { Neck } from './components/Neck';
//import { Movie } from './components/Movie';

class App extends PureComponent {
  componentDidMount() {
    this.props.getAllBreeds();
    this.nextQuestion();
  }

  getOneRandomImage() {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => this.props.setCorrectBreedGameUno(res.body.message))
      .then(() => {
        this.props.getAnswers(
          this.props.correctBreedObj.name,
          this.props.allBreeds
        );
      });
  }

  getThreeRandomImages() {
    request.get('https://dog.ceo/api/breeds/image/random/3').then(res => {
      this.props.getThreeRandomImages(res.body.message);
    });
  }

  nextQuestion() {
    const gameVariationBool = Math.floor(Math.random() * 2);
    this.props.setGameVariation(gameVariationBool);
    gameVariationBool ? this.getOneRandomImage() : this.getThreeRandomImages();
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

  // Event Handlers
  handleButtonClick = e => {
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

  handleImageClick = e => {
    const correctBreed = this.props.threeImages.correctBreed;
    if (e.target.getAttribute('value') === correctBreed) {
      console.log('You won');
      this.incrementScore();
      this.incrementWinStreak();
      this.addTenCoins();
      setTimeout(() => {
        this.nextQuestion();
      }, 500);
    } else {
      console.log('You Lost');
      this.resetWinStreak();
      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    }
  };

  render() {
    return (
      <div className="Container">
        {/*<Movie />*/}
        <Header />
        {this.props.gameVariation ? (
          <ImageContainer />
        ) : (
          <ThreeImagesContainer onClick={this.handleImageClick} />
        )}
        <Neck />
        {this.props.gameVariation ? (
          <ButtonsContainer onClick={this.handleButtonClick} />
        ) : (
          <QuestionContainer />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  correctBreedObj,
  allBreeds,
  threeImages,
  gameVariation
}) => ({
  correctBreedObj,
  allBreeds,
  threeImages,
  gameVariation
});

const mapDispatchToProps = {
  addToNumberOfQuestionsAsked,
  addToScore,
  addToWinStreak,
  getAnswers,
  resetWinStreak,
  setAllBreeds,
  setCorrectBreedGameUno,
  getAllBreeds,
  addShownBreeds,
  addTenCoins,
  getThreeRandomImages,
  setGameVariation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
