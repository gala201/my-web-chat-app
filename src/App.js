import { useState, useEffect } from "react";
import Input from "./Components/Input";
import Message from "./Components/Message";
import nouns from "./Components/Data/nouns";
import adjectives from "./Components/Data/adjectives";

function randomName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

function App() {
  const [user, setUser] = useState({
    username: randomName(),
    randomColor: randomColor()
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
    <div className="App">
      <div className='menu'>
        <h1 className='app-name'>Chat App</h1>
        <h2 className='messages'>Participants</h2>
        <div className='participants'>
          <div className='chatter'>
            <div className='random-color'></div>
            <div className='chatter-name'>Ivo</div>
          </div>
          <div className='chatter'>
            <div className='random-color'></div>
            <div className='chatter-name'>Karlo</div>
          </div>
        </div>
      </div>

      <main className='chat-window'>
        <div className="App-header">
          <h1>My Chat App</h1>
        </div>
        <Message messages={messages} users={users} />
        <Input onSendMessage={onSendMessage} />
      </main>
    </div>

  );
}

export default App;
