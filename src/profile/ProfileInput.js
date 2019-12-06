import React from 'react';
import SelectStatus from './SelectStatus.js';
import UpdateButton from './UpdateButton.js';

function ProfileInput(props) {
    let input = <input onChange={ (e) => props.handleChange(e) } name={ props.inputName } type={ props.type }
    className="form-control" value={ props.value } />;
    if(props.type == 'select') {
        input = <SelectStatus handleChange={ (e) => props.handleChange(e) } value={ props.value } />
    }
    return (
        <li className="media">
            <i className="feather icon-user align-self-center"></i>
            <div className="media-body">
                <p>{ props.name }</p>
                <div className="input-group">
                    { input }
                    <UpdateButton handleUpdate={ () => props.handleUpdate(props.inputName, props.value) } />
                </div>
            </div>
        </li>  
    )
}

export default ProfileInput;