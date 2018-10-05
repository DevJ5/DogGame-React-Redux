import * as PropTypes from "prop-types";
import React from "react";
import capitalize from "../helpers/capitalize";

export function Buttons(props) {
  return (
    <div className={"Answers"}>
      {props.answers.map((answer, i) => (
        <button
          key={answer}
          id={"button-" + answer}
          className={"Button " + i}
          value={answer}
          disabled={answer[0] === "_"}
          onClick={props.onClick}>
          {capitalize(answer[0] === "_" ? answer.substring(1) : answer)}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  answers: PropTypes.array,
  onClick: PropTypes.func
};
