import React from "react";
import "../styles/Input.css";

function Input(props) {
  return (
    <div className="input-box">
      <input onKeyDown={props.onKeyDown} type="Insert To-Do Item Here" />
      <button onClick={props.onClick}>Add Todo</button>
    </div>
  );
}

export default Input;
