import React from "react";
import * as PropTypes from "prop-types";

const Streak = props => (
  <div className={'Streak'}>
    <p>streak:</p>
    <p>{props.streak} / 10</p>
  </div>
);

Streak.propTypes = {
  streak: PropTypes.number
};

export default Streak