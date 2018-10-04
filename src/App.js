import React, { PureComponent } from "react";
import { connect } from "react-redux";
import request from "superagent";

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
  keyHandling
} from "./actions/AppActions";

import userFeedback from "./functions/userFeedback";
import ImageContainer from "./containers/ImageContainer";
import ButtonsContainer from "./containers/ButtonsContainer";

import { Header } from "./components/Header";
import { Neck } from "./components/Neck";
import { Movie } from "./components/Movie";

let isButtonOnFocus = false;
class App extends PureComponent {
  componentDidMount() {
    document.getElementsByClassName("0").click;
    window.addEventListener("keyup", e => this.keyHandling(e));
    this.props.getAllBreeds();
    this.getQuestion();
  }

  getQuestion() {
    request
      .get("https://dog.ceo/api/breeds/image/random")
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
    this.props.addShownBreeds(correctBreedName);
  }

  addTenCoins() {
    this.props.addTenCoins();
  }
  keyHandling(e) {
    if (!isButtonOnFocus) {
      const focusThis = document.getElementsByClassName("0");
      return (isButtonOnFocus = true);
    } else {
      const codeOfKey = e.keyCode;
      this.props.keyHandling(codeOfKey);
    }
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

    const correctBreed = this.props.correctBreedObj.name;
    const targetValue = e.target.value.toLowerCase();
    const userFeedBack = new userFeedback(
      document.getElementById("button-" + correctBreed),
      document.getElementById("button-" + targetValue)
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
  keyHandling
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
