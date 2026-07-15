import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';

export function Message(props){
    const msg=props.message;
    const sender = props.sender;
    return (
        <div className={sender==='user' ? 'chat-msg-user' : 'chat-msg-bot'}>
        {sender==="bot" 
        && 
        <img src={RobotProfileImage}
        alt="user" 
        width="45px"/>
        }
        <div className="chat-msg-text">{msg}</div>
        {sender==="user" 
        && 
        <img src={UserProfileImage}
        alt="user" 
        width="45px"/>
        }
        </div>
    )
}