import { useState, useEffect } from "react";
import nouns from "./components/data/nouns";
import adjectives from "./components/data/adjectives";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/views/Login"
import Chat from "./components/views/Chat";


export const UsersContext = React.createContext()

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}



function App() {

  const [user, setUser] = useState({
    username: "",
    randomColor: randomColor(),
    avatar: '',
    avatarId: 0
  })

  const [login, setLogin] = useState(false)

  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [users, setUsers] = useState();

  console.log(user);
  console.log(users);

  useEffect(() => {
    const drone = new window.Scaledrone("HhzMgDBJ1k0FbI05", {
      data: user,
    });
    setDrone(drone);
    // eslint-disable-next-line
  }, []);
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

      chatRoom.on("data", (text, chatUser) => {
        setUsers(drone.clientId);


        const username = chatUser.clientData.username;
        const chatUserID = chatUser.id;
        const userColor = chatUser.clientData.randomColor

        const date = new Date()
        const hour = date.getHours()
        const minutes = date.getMinutes()


        setMessages((oldArray) => [
          ...oldArray,
          { text, username, userColor, chatUserID, user, hour, minutes },
        ]);
      });
    });
  }

  const onSendMessage = (message) => {
    if (message) {
      drone.publish({
        room: "observable-room",
        message,
      });
    }
  };




  return (
    <>
      <Router>
        <UsersContext.Provider value={{ user, setUser }}>


          <Routes>
            <Route path='/' element={<Login setLogin={setLogin} />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>

        </UsersContext.Provider>
      </Router>
    </>
  );
}

export default App;
