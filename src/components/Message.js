import React, { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Scrollbars } from 'react-custom-scrollbars-2';

const Message = ({ messages, users }) => {
  const [scroll, setScroll] = useState(true)
  const scrollbarRef = useRef()

  useEffect(() => {
    if (scroll) {
      scrollbarRef.current.scrollToBottom()
    }
  }, [messages])

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 50) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  return (
    <Scrollbars style={{ width: '100%', height: '90%' }} ref={scrollbarRef} onScroll={handleScroll} >
      <ul className="Messages-list">
        {messages?.map((message) => (
          <div key={messages.indexOf(message)} className={(message.chatUserID === users)
            ? "Messages-message"
            : "Messages-message currentMember"}>
            <img src={message.userColor} style={{ backgroundColor: message.bgColor }} className="avatar" alt="" />
            <div className="Message-content">
              <div className="username">{message.username}</div>
              <div className="text">{message.text}</div>
              <div>{message.hour}:{message.minutes}</div>
            </div>
          </div>
        ))}
      </ul>
    </Scrollbars>
  );
};

export default Message;
