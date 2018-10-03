import React from 'react';
import ScoreContainer from "../containers/ScoreContainer";

export function Header() {
  return <div className="Header">
    <ScoreContainer />
    <div className="Title"> - AFFENPINSCHER LIEBHABERN -</div>

    {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}
    <div className="Balance">
      <span>500</span>
      <img width="30" src="https://image.flaticon.com/icons/svg/138/138292.svg"/>
    </div>
    {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}

  </div>;
}