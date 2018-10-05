import React, { Component } from 'react';
import { connect } from 'react-redux';
import capitalize from '../helpers/capitalize';

class QuestionContainer extends Component {
  render() {
    return (
      this.props.threeImages && (
        <div className="question-container">
          <h3>Click the {capitalize(this.props.threeImages.correctBreed)}</h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ threeImages }) => ({ threeImages });

export default connect(mapStateToProps)(QuestionContainer);
