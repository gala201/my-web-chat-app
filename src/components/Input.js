import React, { useState } from "react";
import enter from "./assets/enter.svg"

const Input = ({ onSendMessage }) => {
  const [textInputs, setTextInputs] = useState("");

  function onChange(e) {
    setTextInputs(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setTextInputs("");
    onSendMessage(textInputs);
  }

  return (
    <div className="Input">
      <form onSubmit={(e) => onSubmit(e)} className="input-form">
        <input
          onChange={(e) => onChange(e)}
          value={textInputs}
          type="text"
          placeholder="Start a new message"
          className="chat-input"
        />
        <button><img src={enter} alt="" /></button>
      </form>
    </div>
  );
};

export default Input;
