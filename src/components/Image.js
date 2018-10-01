import * as PropTypes from "prop-types";
import React from "react";

export function Image(props) {
  return <img src={props.correctBreed.image}/>;
}

Image.propTypes = {correctBreed: PropTypes.any};