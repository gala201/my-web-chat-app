import './App.css';
import enter from './assets/enter.svg'

function App() {


  // https://github.com/Illnas/Chat-App-v1.0
  return (
    <body className="App">

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
        <div className='current-chat'>Chat Room</div>
        <div className='chat'>
          <div className='messages'>
            <p>Hello</p>
            <div className='date'>Date</div>
          </div>

          <div className='my-message'>
            <p>Hello</p>
            <div className='date'>Date</div>
          </div>


        </div>
        <div className='input-wrap'>
          <input type="text" />
          <button><img src={enter} alt="" /></button>
        </div>
      </main>

    </body>
  );
}

export default App;
