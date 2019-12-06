import React from 'react';

function SingleUserIcon(props) {
    return (
        <div class="avatar">
            <a>
                <img src={ props.avatar } alt="avatar" class="rounded-circle" />
            </a>
        </div>
    )
}

export default SingleUserIcon;