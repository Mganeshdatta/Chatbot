import {useState} from 'react';
import {Chatbot} from 'supersimpledev';


export function TextBox({value,setValue,text,setText}){
    const [inputText,setInputText]=useState('');
    function changeInput(e){
        setInputText(e.target.value);
    }
    async function sendMessage(){
        const newValue = [
        ...value,
        {
            message: inputText,
            sender:'user',
            key:crypto.randomUUID()
        }
        ]
        setValue(newValue);
        setInputText('');
        if(text===1){
        setText(0);
        }
        const preresponse = 'Loading'
        setValue([
        ...newValue,
        {
            message: preresponse,
            sender:'bot',
            key:crypto.randomUUID()
        }
        ]);
        const response = await Chatbot.getResponseAsync(inputText);

        setValue([
        ...newValue,
        {
            message: response,
            sender:'bot',
            key:crypto.randomUUID()
        }
        ]);
    }
    function useEnter(e){
        if(e.key==='Enter'){
        sendMessage();
        }
        if(e.key==='Escape'){
        setInputText('');
        }
    }
    return(
        <div className="chat-input-container">
        <input 
        className="chat-input"
        type="text" 
        placeholder="Send a message to Chatbot" 
        size="60"
        onChange={changeInput}
        value={inputText}
        onKeyDown={useEnter}
        />
        <button className="send-button" onClick={sendMessage}>
        Send
        </button>
        </div>
    )
}