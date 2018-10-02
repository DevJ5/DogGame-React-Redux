import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

import {
  getAnswers,
  setAllBreeds,
  setCorrectBreed
} from './actions/AppActions';

import { Buttons } from './components/Buttons';
import { Image } from './components/Image';

class App extends PureComponent {
  componentDidMount() {
    request.get('https://dog.ceo/api/breeds/list/all').then(res => {
      this.props.dispatch(setAllBreeds(res.body.message));
    });
    this.getRandomImage();
  }

  getRandomImage() {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => this.props.dispatch(setCorrectBreed(res.body.message)))
      .then(() => {
        this.props.dispatch(
          getAnswers(this.props.correctBreed.name, this.props.allBreeds)
        );
      });
  }

  handleClick = e => {
    e.preventDefault();
    // Where we ended...
    console.log(e.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.correctBreed && (
          <Image correctBreed={this.props.correctBreed} />
        )}
        {this.props.answers.length > 0 && (
          <Buttons answers={this.props.answers} onClick={this.handleClick} />
        )}
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
