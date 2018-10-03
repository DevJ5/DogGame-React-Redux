import React from "react";
import StreakDotsContainer from "../containers/StreakDotsContainer";
import FreeHintContainer from "../containers/FreeHintContainer";

export function Neck() {
  return (
    <div className="Neck">
      <FreeHintContainer/>
      <StreakDotsContainer/>

      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}
      <button className="PaidHint">
        <img width="30" src="https://image.flaticon.com/icons/svg/717/717954.svg"/>
        <span>50</span>
        <img width="20" src="https://image.flaticon.com/icons/svg/138/138233.svg"/>
      </button>
      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}

    </div>
  );
}