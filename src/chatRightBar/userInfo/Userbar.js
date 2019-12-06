import React from 'react';

function Userbar(props) {
    return (
        <div class="userbar">
            <img class="user-pic img-fluid" src={ props.image } alt="user-pic" /> 
            <h5>{ props.name }</h5>
            <p class="mb-0">{ props.location }</p>
        </div>
    )
}

export default Userbar;