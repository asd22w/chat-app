import React from 'react';

function Textarea(props) {
    return (
        <div class="form-group">
            <textarea onChange={ (e) => props.handleChange(e) } 
            class="form-control" name="groupDescription" rows="3" placeholder="Enter Group Description"></textarea>
        </div>
    )
}

export default Textarea;