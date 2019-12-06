import React, { useState } from 'react';
import UserData from './chatHead/UserData.js';
import boy from '../images/men.svg';
import RightMenu from './chatHead/RightMenu.js';

function ChatHead(props) {
    let [ relation, changeRelation ] = useState(props.userInfo.relation);
    let [ isMuted, changeIsMuted ] = useState(props.userInfo.isMuted);

    function mute() {
        console.log('muted', props.userInfo.id);
        changeIsMuted(!isMuted);
    }

    function handleFriend(type, relation) {
        switch(type) {
            case 'add':
                console.log('add');
                break;
            case 'delete':
                console.log('delete');
                break;
        }
        changeRelation(relation);
    }

    return (
        <div class="chat-head">
            <div class="row align-items-center">
                <UserData status={ props.userInfo.statusVisibility } image={ boy } name={ props.userInfo.name } />
                <RightMenu relation={ relation } handleFriend={ handleFriend } mute={ mute } openUserInfo={ props.openUserInfo } closeChat={ props.closeChat } />
            </div>                                    
        </div>
    )
}

export default ChatHead;