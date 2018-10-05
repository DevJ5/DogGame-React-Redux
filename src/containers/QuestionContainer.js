import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionContainer extends Component {
  render() {
    return (
      this.props.correctBreedObj && (
        <div className="question-container">
          <h3>Click the {this.props.correctBreedObj.name}</h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ correctBreedObj }) => ({ correctBreedObj });

export default connect(mapStateToProps)(QuestionContainer);
