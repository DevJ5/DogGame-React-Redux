import React, {Component} from 'react';
import {Buttons} from "./Buttons";
import * as PropTypes from "prop-types";

import '../styles/main.css'
import ImageContainer from '../containers/ImageContainer';

export class Main extends Component {
  render() {
    return (
      <div className={'Main'}>
          <ImageContainer />
        )}
        {this.props.answers.length > 0 && (
          <Buttons answers={this.props.answers} onClick={this.props.onClick}/>
        )}
      </div>
    );
  }
}

Main.propTypes = {
  correctBreed: PropTypes.any,
  answers: PropTypes.any,
  onClick: PropTypes.func
};