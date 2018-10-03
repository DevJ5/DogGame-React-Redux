import * as PropTypes from 'prop-types';
import React from 'react';

export function Buttons(props) {
  // console.log(props.answers);
  return (
    <div className={'Answers'}>
      {props.answers.map(answer => (
        <button
          key={answer}
          id={'button-' + answer.toLowerCase()}
          className={'Button'}
          value={answer}
          disabled={answer[0] === '_'}
          onClick={props.onClick}
        >

          {answer[0] === '_' ? answer.substring(1) : answer}

        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  answers: PropTypes.array,
  onClick: PropTypes.func
};
