import React, {Component} from 'react';
import {Image} from "./Image";
import {Buttons} from "./Buttons";
import * as PropTypes from "prop-types";

export class Main extends Component {
  render() {
    return (
      <div>{this.props.correctBreed && (
        <Image correctBreed={this.props.correctBreed}/>
      )}
        {this.props.answers.length > 0 && (
          <Buttons answers={this.props.answers} onClick={this.props.onClick}/>
        )}</div>)
      ;
  }
}

Main.propTypes = {
  correctBreed: PropTypes.any,
  answers: PropTypes.any,
  onClick: PropTypes.func
};