import React from 'react';
import * as PropTypes from 'prop-types';

import { Main } from './Main';

import ScoreContainer from '../containers/ScoreContainer';
import StreakContainer from '../containers/StreakContainer';
import StreakDotsContainer from "../containers/StreakDotsContainer";

import '../styles/scores.css';
import '../styles/game.css';

export default function Game(props) {
  return (
    <div className={'Game'}>
      <StreakDotsContainer />
      <div className={'ScoresMain'}>
        <ScoreContainer />
        <Main onClick={props.onClick} />
        <StreakContainer />
      </div>
    </div>
  );
}

Game.propTypes = {
  onClick: PropTypes.func
};
