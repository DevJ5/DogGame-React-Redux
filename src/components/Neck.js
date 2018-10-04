import React from "react";
import StreakDotsContainer from "../containers/StreakDotsContainer";
import FreeHintContainer from "../containers/FreeHintContainer";
import PaidHintContainer from "../containers/PaidHintContainer";


export function Neck() {
  return (
    <div className="Neck">
      <FreeHintContainer/>
      <StreakDotsContainer/>
      <PaidHintContainer/>
    </div>
  );
}
