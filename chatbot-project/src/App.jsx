import { useState} from 'react';
import './App.css'
import {TextBox}  from './components/TextBox.jsx';
import {ChatMessages} from './components/ChatMessages.jsx';
     

function App(){
        const arr =useState([]);
        const [text,setText] = useState(1);
        const value = arr[0];
        const setValue = arr[1];
        return (
          <div className="app-container">
            {text ===1 && <div>Welcome to the chatbot project! Send a message using the textbox below.</div>}
            <ChatMessages
              value={value}
            />
            <TextBox 
              value={value} 
              setValue={setValue} 
              text={text} 
              setText={setText}
            />
            <button 
              className="change-position">
            </button>
          </div>
        )
      }

export default App
