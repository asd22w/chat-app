import React from 'react';

function Avatar(props) {
    return (
        <img className="align-self-center rounded-circle" src={ props.image } alt="User Image" />
    )
}

export default Avatar;