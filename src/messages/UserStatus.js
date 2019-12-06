import React from 'react';

function UserStatus(props) {
    let userStatus = "";
    if(props.status == 'online') {
        userStatus = 'user-status';
    } else if (props.status == 'away') {
        userStatus = 'user-status status-offline'
    } else if (props.status == 'dnd') {
        userStatus = 'user-status status-away'
    } else {
        userStatus = 'user-status status-offline-true'
    }

    return (
        <div className={ userStatus }></div>
    )
}

export default UserStatus;