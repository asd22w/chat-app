import React from 'react';

function UserMedia(props) {
    return (
        <div class="media-body">
            <h5>{ props.name }</h5>
            <p class="mb-0">{ props.status }</p>
        </div>
    )
}

export default UserMedia;