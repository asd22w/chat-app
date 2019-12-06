import React from 'react';

function BackArrow(props) {
    return (
        <li class="list-inline-item">
            <a onClick={ props.closeChat } href="#" class="back-arrow"><i class="feather icon-x"></i></a>
        </li>
    )
}

export default BackArrow;