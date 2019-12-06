import React from 'react';
import FriendSection from './FriendSection.js';

function Dropdown(props) {
    return (
        <li class="list-inline-item">
            <div class="dropdown">
                <a href="#" class="" id="chatDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical-"></i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropdown">
                    <a onClick={ props.openUserInfo } class="dropdown-item font-14" href="#" >View User Info</a>
                    <a onClick={ props.mute } class="dropdown-item font-14" href="#">Mute</a>
                    <FriendSection relation={ props.relation } handleFriend={ props.handleFriend } />
                    <a class="dropdown-item font-14" href="#">Clear Chat</a>
                </div>
            </div>
        </li>
    )
}

export default Dropdown;