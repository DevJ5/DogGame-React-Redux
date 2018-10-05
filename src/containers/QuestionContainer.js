import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionContainer extends Component {
  render() {
    return (
      this.props.threeImages && (
        <div className="question-container">
          <h3 className="threep1bh3">
            Which picture contains a{" "}
            <mark class="threeBreed">
              {this.props.threeImages.correctBreed.charAt(0).toUpperCase() +
                this.props.threeImages.correctBreed.slice(1)}
            </mark>
            ?
          </h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ threeImages }) => ({ threeImages });

export default connect(mapStateToProps)(QuestionContainer);
