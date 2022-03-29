import { useState, useEffect } from "react";
import nouns from "./components/data/nouns";
import adjectives from "./components/data/adjectives";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/views/Login"
import Index from "./components/views/Chat";

export const UserContext = React.createContext()


/* function randomName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
} */

function App() {

  const [myUsers, setMyUsers] = useState([])

  const [user, setUser] = useState({
    username: "randomName()",
    randomColor: "randomColor()"
  });
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [users, setUsers] = useState();



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

        setMessages((oldArray) => [
          ...oldArray,
          { text, username, userColor, chatUserID, user },
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

        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Index />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
