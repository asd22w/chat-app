import React from 'react';
import Avatar from '../Avatar.js';
import MessageBody from './MessageBody.js';
import UserStatus from './UserStatus.js';

function Message(props) {
    return (
        <a className={ props.active == props.id ? 'nav-link active' :  'nav-link ' } onClick={
            () => { props.selectMate(props.id); }
        } >
            <div className="media">
                <UserStatus status={ props.status } />
                <Avatar image={ props.avatar } />
                <MessageBody name={ props.name } unread={ props.unread } date={ props.date } body={ props.body } />
            </div>
        </a>    
    )
}

export default Message;