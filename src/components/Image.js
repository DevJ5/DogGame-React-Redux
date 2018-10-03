import * as PropTypes from 'prop-types';
import React from 'react';

export function Image(props) {
  return (
    <div className="ImageContainer">
      <div className="Image">
        <img src={props.correctBreed.image}/>
      </div>
    </div>
  )
}

Image.propTypes = {
  correctBreed: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string
  })
};

