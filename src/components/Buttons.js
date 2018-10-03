import * as PropTypes from 'prop-types';
import React from 'react';

import '../styles/buttons.css';

export function Buttons(props) {
  // console.log(props.answers);
  return (
    <div className={'buttons'}>
      {props.answers.map(answer => (
        <button
          key={answer}
          id={'button-' + answer.toLowerCase()}
          className={'default-button'}
          value={answer}
          onClick={props.handleClick}>
          {answer}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  answers: PropTypes.array,
  onClick: PropTypes.func
};
