import * as PropTypes from 'prop-types';
import React from 'react';

export function Buttons(props) {
  console.log(props.answers);
  return (
    <div>
      {props.answers.map(answer => (
        <button
          key={answer}
          id={'button-' + answer.toLowerCase()}
          value={answer}
          onClick={props.onClick}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  answers: PropTypes.any,
  onClick: PropTypes.func
};
