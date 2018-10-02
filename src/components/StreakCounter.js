import React from "react";
import * as PropTypes from "prop-types";

const StreakCounter = props => (
  <div className={'StreakCounter'}>
    <p>{props.streak}/10</p>
  </div>
);

StreakCounter.propTypes = {
  streak: PropTypes.number
};

export default StreakCounter