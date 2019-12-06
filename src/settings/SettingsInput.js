import React from 'react';

function SettingsInput(props) {
    return (
        <div className="col-3 text-right">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" checked={ props.checked } />
                <label onClick={ props.handleChange } className="custom-control-label" for="notificationSound"></label>
            </div>
        </div>
    )
}

export default SettingsInput;