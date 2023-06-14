import { useState } from 'react';
import './TextNotification.css'

type NotificationProps = {
    from: string;
    text: string;
    threadId: string;
};

const TextNotification = (props : NotificationProps) =>{
    const {from, text, threadId} = props;
    const [message, setMessage] = useState("");

    const setMessageValue = (e: any) =>{
        setMessage(e);
    }
    const sendReply = () =>{
        if(message === ""){
            console.log("No message to send");
            return;
        }
        console.log(message);
        setMessage("");
    }
    const navigateToInboxThread = () =>{
        console.log("navigate to threaded -- ", threadId );
    }
    
    return(
        <div className='NotificationContainer'>
            <div className='NotificationImg'>
                <div className='NotificationImgContainer'>
                    <img onClick={navigateToInboxThread} src="/public/img-box.svg" alt="" className='NotificationImg__img'/>
                </div>
            </div>
            <div className='NotificationContent'>
                <p className='NotificationContainer__title'>New message from:</p>
                <p className='NotificationContainer__number'>{from}</p>
                <p className='NotificationContainer__text'>"{text}"</p>
                <textarea 
                    placeholder='Your reply to be sent'
                    value={message} 
                    onChange={ (e) => setMessageValue(e.target.value)}
                    className="NotificationContainer__input"
                />
                <button 
                    onClick={sendReply}
                    className="NotificationContainer__btn"
                >
                    Send Reply
                </button>
            </div>
        </div>
    );
};

export default TextNotification;

TextNotification.defaultProps = {
    from: "No data",
    text: "No message to show",
    threadId : "No data",
}





