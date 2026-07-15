import {useEffect, useRef} from 'react';
import {Message} from './Message.jsx';

export function ChatMessages({value}){
    const refContainer = useRef(null);
    useEffect(()=>{
        const containerElement = refContainer.current;
        if(containerElement){
        containerElement.scrollTop=containerElement.scrollHeight;
        }
    },[value]);
    return (
        <div className="chat-msg-container"
        ref={refContainer}>
        {value.map((val)=>{
        return (
            <Message
            message={val.message}
            sender={val.sender}
            key = {val.key} />
        )
        })}
        </div>
    );
    }