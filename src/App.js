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

import userFeedback from "./functions/userFeedback";
import { Header } from "./components/Header";
import ImageContainer from "./containers/ImageContainer";
import { Neck } from "./components/Neck";
import ButtonsContainer from "./containers/ButtonsContainer";

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

    const correctBreed = this.props.correctBreed.name;
    const targetValue = e.target.value.toLowerCase();
    const userFeedBack = new userFeedback(
      document.getElementById('button-' + correctBreed),
      document.getElementById('button-' + targetValue)
    );

    this.incrementQuestionsAsked();

    if (targetValue === correctBreed) {
      // Correct answer given -> Show something green
      this.incrementScore();
      this.incrementWinStreak();

      userFeedBack.rightAnswerStyles();

      setTimeout(() => {
        userFeedBack.defaultStyles();

        this.nextQuestion();
      }, 500);
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
    // noinspection HtmlUnknownAttribute
    return (
      <div className="Container">
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              src="https://www.youtube.com/embed/7ZIjkvdz4Ko?rel=0&controls=0&showinfo=0&;start=3;&autoplay=1;stop=.10"
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
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
