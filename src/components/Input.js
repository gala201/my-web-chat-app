import React, { useState, useContext } from "react";
import enter from "./assets/enter.svg"
import EmojiPicker from "emoji-picker-react";
import Picker from "./assets/EmojiPicker.svg"
import { UsersContext } from "../App";

const Input = ({ onSendMessage }) => {
  const { user, setUser } = useContext(UsersContext)
  const [textInputs, setTextInputs] = useState("");
  const [showPicker, setShowPicker] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    if (user.username) {
      setChosenEmoji(emojiObject);
      setTextInputs(previous => previous + emojiObject.emoji)
    }
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
      <img src={Picker} className="emoji-image" onClick={() => setShowPicker(!showPicker)} alt="" />
      <form onSubmit={(e) => onSubmit(e)} className="input-form">
        <input
          onChange={(e) => onChange(e)}
          value={textInputs}
          type="text"
          placeholder="Start a new message"
          className="chat-input"
          disabled={user.username ? false : true}
        />
        <button><img src={enter} alt="" /></button>
      </form>
      {
        showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />
      }
    </div>
  );
};

export default Input;
