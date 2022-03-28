import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Message = ({ messages, users }) => {
    console.log(messages)

    return (
        <div>
            <ul className="chat">
                {messages.map((message) => (
                    <div key={messages.indexOf(message)} className={(message.chatUserID === users)
                        ? "messages"
                        : "Messages-message my-message"}>
                        <span
                            className="avatar"
                            style={{ backgroundColor: `${message.userColor}` }}
                        />
                        <div className="messages">
                            <div className="username">{message.username}</div>
                            <div className="text">{message.text}</div>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Message;

{/* <main className='chat-window'>
<div className='current-chat'>Chat Room</div>
<div className='chat'>
  <div className='messages'>
    <p>Hello</p>

  </div>

  <div className='my-message'>
    <p>Hello</p>

  </div>


</div>
<Input onSendMessage={onSendMessage} />
</main> */}