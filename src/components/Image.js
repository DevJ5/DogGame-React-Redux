import * as PropTypes from 'prop-types';
import React from 'react';
import '../styles/image.css';

export function Image(props) {
  return <img className="Image" src={props.correctBreed.image} alt="" />;
}

Image.propTypes = { correctBreed: PropTypes.any };
