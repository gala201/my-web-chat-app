import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactScrollableFeed from "react-scrollable-feed";


const Message = ({ messages, users }) => {
  console.log(messages)



  return (
    <div className="overflow">
      <ReactScrollableFeed className="Messages-list">
        {messages?.map((message) => (
          <div key={messages.indexOf(message)} className={(message.chatUserID === users)
            ? "Messages-message"
            : "Messages-message currentMember"}>
            <img src={message.userColor} className="avatar" alt="" />
            <div className="Message-content">
              <div className="username">{message.username}</div>
              <div className="text">{message.text}</div>
              <div>{message.hour}:{message.minutes}</div>
            </div>

          </div>
        ))}
      </ReactScrollableFeed>
    </div>
  );
};

export default Message;
