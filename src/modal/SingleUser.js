import React from 'react';
import Checkbox from './Checkbox.js';

function SingleUser(props) {
    return (
        <li class="media">
            <img class="align-self-center rounded-circle" src={ props.user.avatar } alt="Generic placeholder image" />
            <div class="media-body">
                <h5><span>{ props.user.name }</span></h5>
                <p>{ props.user.textStatus }</p>
            </div>
            <Checkbox user={ props.user } handleSelect={ props.handleSelect } />
        </li>
    )
}

export default SingleUser;