import React from "react";
import * as PropTypes from "prop-types";

import {Main} from "./Main";

import ScoreContainer from "../containers/ScoreContainer";
import StreakContainer from "../containers/StreakContainer";

import '../styles/scores.css'

export default function Game(props) {
  return <div className={"Game"}>
    <ScoreContainer />
    <Main
      correctBreed={props.correctBreed}
      answers={props.answers}
      onClick={props.onClick}
    />
    <StreakContainer />
  </div>;
}

Game.propTypes = {
  correctBreed: PropTypes.any,
  answers: PropTypes.any,
  onClick: PropTypes.func,
};