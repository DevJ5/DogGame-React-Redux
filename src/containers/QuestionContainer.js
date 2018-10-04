import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionContainer extends Component {
  render() {
    return (
      this.props.threeImages && (
        <div className="question-container">
          <h3>Click the {this.props.threeImages.correctBreed}</h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ threeImages }) => ({ threeImages });

export default connect(mapStateToProps)(QuestionContainer);
