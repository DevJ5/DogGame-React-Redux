import React, { Component } from 'react';
import { connect } from 'react-redux';
import capitalize from "../helpers/capitalize";

class QuestionContainer extends Component {
  render() {
    return (
      this.props.correctBreedObj && (
        <div className="question-container">
          <h3>Click the {capitalize(this.props.correctBreedObj.name)}</h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ correctBreedObj }) => ({ correctBreedObj });

export default connect(mapStateToProps)(QuestionContainer);
