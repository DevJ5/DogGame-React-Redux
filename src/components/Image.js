import * as PropTypes from 'prop-types';
import React from 'react';

export function Image(props) {
  return (
    <div className="ImageContainer">
      <div className="Image">
        <img src={props.correctBreedObj.image} alt="" />
      </div>
    </div>
  );
}

Image.propTypes = {
  correctBreedObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string
  })
};
