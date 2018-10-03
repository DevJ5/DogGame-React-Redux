import React from "react";
import * as PropTypes from 'prop-types';

const StreakDots = props => {

  const dots = [];

  for (let i = 0; i < 10; i++) {
    dots.push(<div className={'StreakDots-' + (i < props.streak ? 'right' : 'wrong')}></div>)
  }

  return (
    <div className={'StreakDots'}>
      {dots}
    </div>
  )
};

StreakDots.propTypes = {
  streak: PropTypes.number
};

export default StreakDots