import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import request from 'superagent'

import {getAnswers, setBreeds, setCorrectBreed} from "./actions/AppActions";

import './App.css';
import {Buttons} from "./components/Buttons";
import {Image} from "./components/Image";

class App extends PureComponent {

  componentDidMount() {
    request.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      this.props.dispatch(setBreeds(response.body.message))
    });
    this.getRandomImage()
  }

  getRandomImage() {
    request.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.props.dispatch(setCorrectBreed(response.body.message))
    })
    .then(() => this.props.dispatch(getAnswers(this.props.correctBreed.name, this.props.allBreeds)))
  }

  handleClick = e => {
    e.preventDefault();
    console.log(e.target.value);
    // this.props.dispatch(clicks(e.target.value));

  };

  render() {

    console.log(this.props);

    return (
      <div className="App">
        {this.props.correctBreed && <Image correctBreed={this.props.correctBreed}/>}
        {this.props.answers.length > 0 && <Buttons answers={this.props.answers} onClick={this.handleClick}/>}
      </div>
    );
  }
}

const mapStateToProps = ({ correctBreed, answers, allBreeds }) => ({ correctBreed, answers, allBreeds });

export default connect(mapStateToProps)(App);
