import * as PropTypes from 'prop-types';
import React from 'react';

export function Buttons(props) {
  return (
    <div>
      <button value={props.answers[0]} onClick={props.onClick}>
        {props.answers[0]}
      </button>
      <button value={props.answers[1]} onClick={props.onClick}>
        {props.answers[1]}
      </button>
      <button value={props.answers[2]} onClick={props.onClick}>
        {props.answers[2]}
      </button>
    </div>
  );
}

Buttons.propTypes = {
  answers: PropTypes.any,
  onClick: PropTypes.func
};
