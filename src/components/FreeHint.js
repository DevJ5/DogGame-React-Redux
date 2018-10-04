import React from 'react';

export default function FreeHint(props) {
  return (
    <button
      className={'FreeHint'}
      disabled={props.isDisabled}
      onClick={props.onClick}>
      <img
        width="30"
        src="https://image.flaticon.com/icons/svg/717/717954.svg"
        alt=""
      />
      <span>Free</span>
    </button>
  );
}
