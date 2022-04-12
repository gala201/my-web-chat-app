import React, { useState } from "react";
import enter from "./assets/enter.svg"
import Picker from "emoji-picker-react";

const Input = ({ onSendMessage }) => {
  const [textInputs, setTextInputs] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };



  function onChange(e) {
    setTextInputs(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setTextInputs("");
    onSendMessage(textInputs);
  }

  return (
    <div className="input">
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
