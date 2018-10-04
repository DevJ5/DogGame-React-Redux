import React from 'react';
import ScoreContainer from "../containers/ScoreContainer";
import BalanceContainer from "../containers/BalanceContainer";

export function Header() {
  return <div className="Header">
    <ScoreContainer />
    <div className="Title"> - AFFENPINSCHER LIEBHABERN -</div>
    <BalanceContainer/>
  </div>;
}
