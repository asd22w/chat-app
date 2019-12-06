import React from 'react';

function UpdateButton(props) {
    return (
        <div className="input-group-append">
            <button onClick={ props.handleUpdate } className="btn btn-link" type="button">Update</button>
        </div>
    )
}

export default UpdateButton;