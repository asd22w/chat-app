import React from 'react';

function Input(props) {
    return (
        <div class="form-group">
            <input onChange={ (e) => props.handleChange(e) } type="text" class="form-control" name="groupName" placeholder="Enter Group Name" />
        </div>
    )
}

export default Input;