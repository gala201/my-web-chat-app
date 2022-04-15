import { useState, useEffect, useContext } from "react";
import Input from "../Input";
import Message from "../Message";
import React from "react";

const Chat = ({ members, messages, users, onSendMessage }) => {

    return (
        <>
            <div className="App">
                <div className='menu'>
                    <h1 className='app-name'>Chat App</h1>
                    <h2 className='messages'>Participants</h2>
                    <div className='participants'>
                        {
                            members?.map(v => {
                                return (
                                    <div className='chatter'>
                                        <img src={v.clientData.avatar} className="chatter-avatar" style={{ backgroundColor: v.clientData.bgColor }} alt="" />
                                        <div key={v.id} >{v.clientData.username} </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <main className='chat-window'>
                    <div className="App-header">
                        <h1>Chat Room</h1>
                    </div>
                    <Message messages={messages} users={users} />
                    <Input onSendMessage={onSendMessage} />
                </main>
            </div>
        </>
    )
}

export default Chat