
import React, {Component} from 'react'
import Score from "../components/scores/Score";
import {connect} from "react-redux";

class ScoreContainer extends Component {

  calculateScore() {
    const score = parseInt((
      (this.props.currentScore / this.props.numberOfQuestionsAsked) *
      100
    ).toFixed(2));
    return isNaN(score) ? 0 : score;
  }

  render() {
    return <Score score={this.calculateScore()}/>
  }
}

const mapStateToProps = ({ numberOfQuestionsAsked, currentScore }) => ({ numberOfQuestionsAsked, currentScore });

export default connect(mapStateToProps)(ScoreContainer)