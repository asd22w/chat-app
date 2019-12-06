import React from 'react';
import Message from './Message.js';
import boy from '../images/boy.svg';
import ScrollbarCustom from '../ScrollbarCustom.js';

function Messages(props) {
    const messagesList = [];

    for(let message of props.messages)
    {
        if( props.filter && message.name.toLowerCase().indexOf(props.filter.toLowerCase()) == -1  ) continue;
        const msg = <Message selectMate={ props.selectMate } name={ message.name }
        date={ message.date } status={ message.status } avatar={ boy }
        body={ message.message } unread={ message.unread } key={ message.userID }
        active={ props.selectedID } id={ message.userID }
        />;
        messagesList.push(msg)
    }

    return (
        <div className="chat-left-body">
            <div className="nav flex-column nav-pills chat-userlist" id="chat-list-tab" role="tablist" aria-orientation="vertical">
                <ScrollbarCustom diff={ 210 }>
                    { messagesList }             
                </ScrollbarCustom>        
            </div>
        </div>
    )
}

export default Messages;