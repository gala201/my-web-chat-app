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
    <div className="input">
      <form onSubmit={(e) => onSubmit(e)} className="input-form">
        <input
          onChange={(e) => onChange(e)}
          value={textInputs}
          type="text"
          placeholder="Start a new message"
          className="chat-input"
        />
        <img src={Picker} onClick={() => setShowPicker(!showPicker)} alt="" />
        {
          showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />
        }
        <button><img src={enter} alt="" /></button>
      </form>
    </div>
  );
};

export default Input;
