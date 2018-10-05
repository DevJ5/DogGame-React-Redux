import React, { Component } from "react";
import { connect } from "react-redux";
import capitalize from "../helpers/capitalize";

class QuestionContainer extends Component {
  render() {
    return (
      this.props.correctBreedObj && (
        <div className="question-container">
          <h3 className="threep1bh3">
            Which picture contains a{" "}
            <mark class="threeBreed">
              {capitalize(this.props.correctBreedObj.name)}
            </mark>
            ?
          </h3>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ correctBreedObj }) => ({ correctBreedObj });

export default connect(mapStateToProps)(QuestionContainer);
