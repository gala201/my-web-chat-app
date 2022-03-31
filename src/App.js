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
    randomColor: randomColor()
  });
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [users, setUsers] = useState([{
    username: "drasko"
  }]);

  console.log(user);
  console.log(users);





  return (
    <>
      <Router>
        <UsersContext.Provider value={{ users, setUsers }}>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>

        </UsersContext.Provider>
      </Router>
    </>
  );
}

export default App;
