import React from 'react';
import * as PropTypes from 'prop-types';

const StreakDots = props => {
  const dots = [];

  for (let i = 0; i < 10; i++) {
    dots.push(
      <div
        key={i}
        className={'StreakDot ' + (i < props.streak ? 'right' : 'wrong')}
      />
    );
  }

  return <div className={'StreakBar'}>{dots}</div>;
};

StreakDots.propTypes = {
  streak: PropTypes.number
};

export default StreakDots;
