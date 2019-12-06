import React, { useState } from 'react';
import ChatWindow from './ChatWindow.js';
import ChatUserInfo from './userInfo/ChatUserInfo.js';
import { Transition } from 'react-transition-group';

function ChatRightBar(props) {
    let [isUserInfoOpened, setIsUserInfoOpened] = useState(false);
    let classN = 'chat-rightbar ';
    if(props.isActive) classN += 'show';

    return (
        <div className={ classN }>
            <ChatWindow DATA={ DATA } isUserInfoOpened={ isUserInfoOpened } openUserInfo={ () => setIsUserInfoOpened(true) } closeChat={ props.closeChat } />
            {<Transition in={isUserInfoOpened} timeout={100}>
                { state => (
                    <ChatUserInfo state={ state } userInfo={ DATA[0] } closeUserinfo={ () => setIsUserInfoOpened(false) } />
                )
                }
            </Transition>}
        </div>
        
    )
}

// data example 

const DATA = [
    {name: 'Vadim Kruglov', location: 'Florida, USA',  status: 'I am on Gappa', email: 'demo@example.com', statusVisibility: 'online', facebook: '111',
    twitter: '123', instagram: '12345', relation: 'friends', isMuted: false, id: '2'
},
    [
        {message: 'Waiting for module 1 to finish...', date: '02:30 pm', name: 'Emily Cook', userID: '1', messageID: '1'},
        {message: 'Waiting for module 1 to finish...', date: '02:30 pm', name: 'Emily Cook', userID: '2', messageID: '2'},
        {message: 'Waiting for module 1 to finish...', date: '02:30 pm', name: 'Emily Cook', userID: '1', messageID: '3'},
        {message: 'Waiting for module 1 to finish...', date: '02:30 pm', name: 'Emily Cook', userID: '2', messageID: '4'},
        {message: 'Waiting for module 1 to finish...', date: '02:30 pm', name: 'Emily Cook', userID: '1', messageID: '5'}
    ]
]

export default ChatRightBar;