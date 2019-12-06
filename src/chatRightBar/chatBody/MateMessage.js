import React from 'react';

function MateMessage(props) {
    return (
        <div className="chat-message chat-message-left">
            <div className='chat-message-name'>
                <span>{ props.name }</span>
            </div>
            <div className="chat-message-text">
                <span>{ props.text }</span>
            </div>
            { props.success ? <div className="chat-message-meta">
                <span>{ props.date }<i className="feather icon-check ml-2"></i></span>
            </div> : '' }
        </div>
    )
}

export default MateMessage;