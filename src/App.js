import { useState, useEffect } from "react";
import nouns from "./components/data/nouns";
import adjectives from "./components/data/adjectives";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/views/Login"
import Chat from "./components/views/Chat";

export const UsersContext = React.createContext()



function App() {

  const [users, setUsers] = useState([])




  return (
    <>
      <Router>

      <UsersContext.Provider value={{users, setUsers}}>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Chat />} />
        </Routes>

      </UsersContext.Provider>
      </Router>
    </>
  );
}

export default App;
