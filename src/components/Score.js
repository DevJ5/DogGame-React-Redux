import React from "react";
import * as PropTypes from "prop-types";

const Score = props => (
  <div className={'Score'}>
    <p>{props.score}%</p>
  </div>
);

Score.propTypes = {
  score: PropTypes.number
};

export default Score