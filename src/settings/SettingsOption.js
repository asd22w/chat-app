import React from 'react';
import SettingsInput from './SettingsInput.js';

function SettingsOption(props) {
    return (
        <div className="row align-items-center pb-3">
            <div className="col-9"><h6 className="mb-0">{ props.title }</h6></div>
            <SettingsInput handleChange={ props.handleChange } checked={ props.checked } />
        </div>
    )
}

export default SettingsOption;