import Score from "./scores/Score";
import {Main} from "./Main";
import Streak from "./scores/Streak";
import * as PropTypes from "prop-types";
import React from "react";

import '../styles/scores.css'

export function Game(props) {
  return <div className={"Game"}>
    <Score score={props.score}/>
    <Main
      correctBreed={props.correctBreed}
      answers={props.answers}
      onClick={props.onClick}
    />
    <Streak streak={props.streak}/>
  </div>;
}

Game.propTypes = {
  score: PropTypes.any,
  correctBreed: PropTypes.any,
  answers: PropTypes.any,
  onClick: PropTypes.func,
  streak: PropTypes.any
};