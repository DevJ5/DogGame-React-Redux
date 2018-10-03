import React from 'react';
import * as PropTypes from 'prop-types';

import StreakDotsContainer from '../containers/StreakDotsContainer';
import Main from './Main';
import ScoreContainer from '../containers/ScoreContainer';
import StreakContainer from '../containers/StreakContainer';

export default function Game(props) {
  return (
    <div className="Game">
      <StreakDotsContainer />
      <div className="ScoresMain">
        <ScoreContainer />
        <Main handleClick={props.handleClick} />
        <StreakContainer />
      </div>
    </div>
  );
}

Game.propTypes = {
  onClick: PropTypes.func
};
