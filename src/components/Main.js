import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import '../styles/main.css';
import ButtonsContainer from '../containers/ButtonsContainer';
import ImageContainer from '../containers/ImageContainer';

export default class Main extends Component {
  render() {
    return (
      <div className={'Main'}>
        <ImageContainer />
        <ButtonsContainer handleClick={this.props.handleClick} />
      </div>
    );
  }
}

Main.propTypes = {
  onClick: PropTypes.func
};
