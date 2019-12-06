import React from 'react';
import SendMessage from './chatBottom/SendMessage.js';

function ChatBottom(props) {
    let classN = "chat-bottom";
    if(props.isUserInfoOpened) classN += ' small'

    return (
        <div className={ classN }>
            <div className="chat-messagebar">
                <SendMessage sendMessage={ props.sendMessage } />
            </div>
        </div>
    )
}

export default ChatBottom;