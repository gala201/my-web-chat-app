import { useState, useEffect } from "react";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/views/Login"
import Chat from "./components/views/Chat";

import './styles/styles.scss'


export const UsersContext = React.createContext()


function App() {

  const [user, setUser] = useState({
    username: "",
    avatar: '',
    bgColor: ''
  })

  const [login, setLogin] = useState(false)

  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [users, setUsers] = useState();

  const [members, setMembers] = useState([]);



  useEffect(() => {
    if (login) {
      const drone = new window.Scaledrone("HhzMgDBJ1k0FbI05", {
        data: user,
      });
      setDrone(drone);
    }
  }, [login]);
  // eslint-disable-next-line

  useEffect(() => {
    if (drone) {
      drone.on("open", (error) => {
        if (error) {
          console.log("Error on connecting", error);
        }

        const chatRoom = drone.subscribe("observable-room");

        chatRoom.on("open", (error) => {
          if (error) {
            return console.error(error);
          }
          // Connected to room
        });

        chatRoom.on('members', m => {
          setMembers(m)
        })

        chatRoom.on('member_join', member => {
          setMembers(previous => [...previous, member])
        })

        chatRoom.on('member_leave', ({ id }) => {
          setMembers(previous => previous.filter(v => v.id !== id))
          /* const index = members.findIndex(member => member.id === id) */

        })

        chatRoom.on("data", (text, chatUser) => {
          setUsers(drone.clientId);


          const username = chatUser.clientData.username;
          const chatUserID = chatUser.id;
          const userColor = chatUser.clientData.avatar
          const bgColor = chatUser.clientData.bgColor

          const date = new Date()
          const hour = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');


          setMessages((oldArray) => [
            ...oldArray,
            { text, username, userColor, chatUserID, user, hour, minutes, bgColor },
          ]);
        });
      });
    }
  }, [drone])

  const onSendMessage = (message) => {
    if (message) {
      drone.publish({
        room: "observable-room",
        message,
      });
    }
  };

  useEffect(() => {
    console.log(members);
  }, [members])



  return (
    <>
      <Router>
        <UsersContext.Provider value={{ user, setUser }}>


          <Routes>
            <Route path='/' element={<Login setLogin={setLogin} login={login} />} />
            <Route path='/chat' element={<Chat
              messages={messages}
              users={users}
              onSendMessage={onSendMessage}
              members={members}
            />}
            />
          </Routes>

        </UsersContext.Provider>
      </Router>
    </>
  );
}

export default App;
