import React, { useEffect } from 'react';
import Head from './Head.js';
import Body from './Body.js';

function ChatUserInfo(props) {
    let classN = 'chat-user-info ';
    if(props.state == 'entered') classN += 'show';
    return (
        <div class={ classN } >
            <Head handleClick={ props.closeUserinfo } />
            <Body data={ props.userInfo } />                              
        </div>
    )
}

export default ChatUserInfo;