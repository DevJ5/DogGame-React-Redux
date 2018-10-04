import React from 'react';

const Balance = props => (
  <div className="Balance">
    <span>{props.balance}</span>
    <img
      width="30"
      src="https://image.flaticon.com/icons/svg/138/138292.svg"
      alt=""
    />
  </div>
);

export default Balance;
