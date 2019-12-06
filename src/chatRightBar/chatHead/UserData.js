import React from 'react';
import Avatar from '../../Avatar.js';
import UserStatus from '../../messages/UserStatus.js';
import UserMedia from './userMedia.js';

function UserData(props) {
    return (
        <div class="col-6">                                                
            <ul class="list-unstyled mb-0">
                <li class="media">
                    <UserStatus status={ props.status } />
                    <Avatar image={ props.image } />
                    <UserMedia name={ props.name } status={ props.status } />
                </li>
            </ul>
        </div>
    )
}

export default UserData;