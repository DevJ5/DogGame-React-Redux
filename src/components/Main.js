import React, { Component } from 'react';
import { Image } from './Image';
import * as PropTypes from 'prop-types';

import '../styles/main.css';
import ButtonsContainer from '../containers/ButtonsContainer';

export class Main extends Component {
  render() {
    return (
      <div className={'Main'}>
        {this.props.correctBreed && (
          <Image correctBreed={this.props.correctBreed} />
        )}
        {this.props.answers.length > 0 && (
          <ButtonsContainer onClick={this.props.onClick} />
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
