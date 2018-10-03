import React from 'react';
import StreakDotsContainer from '../containers/StreakDotsContainer';

export function Neck() {
  return (
    <div className="Neck">
      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}
      <div className="FreeHint">
        <img
          width="30"
          src="https://image.flaticon.com/icons/svg/717/717954.svg"
          alt=""
        />
        <span>Free</span>
      </div>
      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}

      <StreakDotsContainer />

      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}
      <div className="PaidHint">
        <img
          width="30"
          src="https://image.flaticon.com/icons/svg/717/717954.svg"
          alt=""
        />
        <span>50</span>
        <img
          width="20"
          src="https://image.flaticon.com/icons/svg/138/138233.svg"
          alt=""
        />
      </div>
      {/* THIS HAS TO BE A CONTAINER IN THE FUTURE */}
    </div>
  );
}
