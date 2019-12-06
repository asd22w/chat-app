import React from 'react';
import SingleUser from './SingleUser.js';

function UserList(props) {
    const userList = props.users.map(el => {
        return <SingleUser  handleSelect={ props.handleSelect }
        key={ el.id } user={ el } />
    })
    

    return (
        <div class="add-users-list">
            <ul class="list-unstyled">
                { userList }
            </ul>
        </div>
    )
}

export default UserList;