import { useState, useEffect, useContext } from "react";
import Input from "../Input";
import Message from "../Message";

import React from "react";
import { UsersContext } from "../../App";







const Chat = ({ members, messages, users, onSendMessage }) => {

    const { user, setUser } = useContext(UsersContext)
    console.log("ffff");
    console.log(members);

    return (
        <>


            <div className="App">
                <div className='menu'>
                    <h1 className='app-name'>Chat App</h1>
                    <h2 className='messages'>Participants</h2>
                    <div className='participants'>
                        <div className='chatter'>
                            <div className='random-color'></div>
                            {/*  <div className='chatter-name'>{user.username}</div>
                            <div className="display-avatar"><img src={user.avatar} alt="" /></div> */}
                            {
                                members?.map(v => {
                                    console.log(v);
                                    return (
                                        <div key={v.id}>{v.clientData.username}</div>
                                    )
                                })
                            }
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