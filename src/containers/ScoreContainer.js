import React, { Component } from 'react';
import Score from '../components/scores/Score';
import { connect } from 'react-redux';

class ScoreContainer extends Component {
  calculateScore() {
    const { currentScore, numberOfQuestionsAsked } = this.props.score;
    const score = parseInt(((currentScore / numberOfQuestionsAsked) * 100).toFixed(2), 10);
    return isNaN(score) ? 0 : score;
  }

  render() {
    return <Score score={this.calculateScore()}/>;
  }
}

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps)(ScoreContainer);