import ScoreContainer from '../containers/ScoreContainer';
import { Main } from './Main';
import Streak from './scores/Streak';
import * as PropTypes from 'prop-types';
import React from 'react';

import '../styles/scores.css';

export function Game(props) {
  return (
    <div className={'Game'}>
      <ScoreContainer />
      <Main
        correctBreed={props.correctBreed}
        answers={props.answers}
        onClick={props.onClick}
      />
      <Streak streak={props.streak} />
    </div>
  );
}

Game.propTypes = {
  correctBreed: PropTypes.any,
  answers: PropTypes.any,
  onClick: PropTypes.func,
  streak: PropTypes.any
};
