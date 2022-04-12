import React, { useState } from "react";
import enter from "./assets/enter.svg"
import EmojiPicker from "emoji-picker-react";
import Picker from "./assets/EmojiPicker.svg"

const Input = ({ onSendMessage }) => {
  const [textInputs, setTextInputs] = useState("");
  const [showPicker, setShowPicker] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setTextInputs(previous => previous + emojiObject.emoji)
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

    <div className="input-container">

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
      <img src={Picker} className="emoji-image" onClick={() => setShowPicker(!showPicker)} alt="" />
      {
        showPicker && <EmojiPicker className="emoji-picker" onEmojiClick={onEmojiClick} />
      }

    </div>
  );
};

export default Input;
