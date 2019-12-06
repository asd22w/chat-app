import React from 'react';
import SingleUserIcon from './SingleUserIcon.js';


function UserList(props) {
    const icons = props.users.map((el) => {
        return <SingleUserIcon avatar={ el.avatar } key={ el.id } />
    })

    return (
        <div class="added-users">
            <div class="avatar-group">
                { icons }
            </div>
        </div>
    )
}

export default UserList;