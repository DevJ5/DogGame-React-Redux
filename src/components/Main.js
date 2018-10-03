import React, { Component } from 'react';
import { Image } from './Image';
import * as PropTypes from 'prop-types';

import '../styles/main.css';
import ButtonsContainer from '../containers/ButtonsContainer';
import ImageContainer from '../containers/ImageContainer';

export class Main extends Component {
  render() {
    return (
      <div className={'Main'}>
          <ImageContainer />     
          <ButtonsContainer onClick={this.props.onClick} />
      </div>
    );
  }
}

Main.propTypes = {
  onClick: PropTypes.func
};
