import React from 'react';

function MyMessage(props) {
    return (
        <div className="chat-message chat-message-right">
            <div className="chat-message-text">
                <span>{ props.text }</span>
            </div>
            { props.success ? <div className="chat-message-meta">
                <span>{ props.date }<i className="feather icon-check ml-2"></i></span>
            </div> : '' }
        </div>
    )
}

export default MyMessage;