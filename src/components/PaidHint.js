import React from 'react';

const PaidHint = props => (
  <button className="PaidHint" onClick={props.onClick}>
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
  </button>
);

export default PaidHint;
