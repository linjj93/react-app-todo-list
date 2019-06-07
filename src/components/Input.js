import React from "react";
import "../styles/Input.css";

function Input(props) {
  return (
    <div className="input-box">
      <input
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        value={props.value}
        type="Insert To-Do Item Here"
      />
      <button onClick={props.onClick}>Add Todo</button>
    </div>
  );
}

export default Input;
