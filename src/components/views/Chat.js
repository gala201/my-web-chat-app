import { useState, useEffect, useContext } from "react";
import Input from "../Input";
import Message from "../Message";
import nouns from "../data/nouns";
import adjectives from "../data/adjectives";
import React from "react";
import "../../index.css"
import { UsersContext } from "../../App";
import Astronaut from "../assets/avatars/astronaut.svg"

import Login from "../views/Login"




const Chat = ({ messages, users, onSendMessage }) => {

    const { user, setUser } = useContext(UsersContext)

    return (
        <>


            <div className="App">
                <div className='menu'>
                    <h1 className='app-name'>Chat App</h1>
                    <h2 className='messages'>Participants</h2>
                    <div className='participants'>
                        <div className='chatter'>
                            <div className='random-color'></div>
                            <div className='chatter-name'>{user.username}</div>
                            <div className="display-avatar"><img src={user.avatar} alt="" /></div>
                        </div>
                        <div className='chatter'>
                            <div className='random-color'></div>
                            <div className='chatter-name'>Karlo</div>
                        </div>
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