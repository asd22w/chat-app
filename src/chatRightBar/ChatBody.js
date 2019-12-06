import React from 'react';
import MyMessage from './chatBody/MyMessage.js';
import MateMessage from './chatBody/MateMessage.js';

function ChatBody(props) {
    const messageList = [];
    for(let message of props.messages) {
        if(message.userID == '1') {
            messageList.push(
                <MyMessage text={ message.message } date={ message.date } key={ message.messageID } success={ true } />
            )
        } else {
            messageList.push(
                <MateMessage text={ message.message } date={ message.date } key={ message.messageID } success={ true } name={ message.name } />
            )
        }
    }

    return (
        <div className="chat-body">
                    <div className="tab-content" id="chat-listContent">
                        <div className="tab-pane shows">
                            <div className="chat-day text-center mb-3">
                                <span className="badge badge-secondary-inverse">Today</span>
                            </div>                                
                            { messageList }
                        </div>
                    </div>                    
                </div>
    )
}

export default ChatBody;