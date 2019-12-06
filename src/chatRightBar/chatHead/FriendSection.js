import React from 'react';

function FriendSection(props) {
    let cont = '';
    switch(props.relation) {
        case 'friends':
            cont = <a onClick={ () => props.handleFriend('delete', 'friendReq') } class="dropdown-item font-14" href="#">Remove from friends</a>;
            break;
        case 'userReq':
            cont = <a onClick={ () => props.handleFriend('delete', 'stranger') } class="dropdown-item font-14" href="#">Decline request</a>;
            break;
        case 'friendReq':
            cont = <a onClick={ () => props.handleFriend('add', 'friends') } class="dropdown-item font-14" href="#">Accept request</a>
            break;
        case 'stranger':
            cont = <a onClick={ () => props.handleFriend('add', 'userReq') } class="dropdown-item font-14" href="#">Send friend request</a>
            break;
    }

    return cont;
}

export default FriendSection