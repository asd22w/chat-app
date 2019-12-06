import React from 'react';

function MessageBody(props) {
    let unread = '';
    if(props.unread) {
        unread = <span className="badge badge-primary ml-2">{ props.unread }</span>
    }
    return (
        <div className="media-body">
            <h5>{ props.name }
                { unread }
                <span className="chat-timing">{ props.date }</span>
            </h5>
            <p>{ props.body }</p>
        </div>
    )
}

export default MessageBody;