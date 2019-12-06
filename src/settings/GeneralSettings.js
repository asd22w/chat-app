import React from 'react';
import SettingsOption from './SettingsOption.js';

function GeneralSettings(props) {
    return (
        <div className="general-setting">
            <SettingsOption handleChange={ () => props.handleChange('notificationSounds') } title='Notification Sounds' checked={ props.notificationSounds } />
            <SettingsOption handleChange={ () => props.handleChange('messageAlerts') } title='New Message Alerts' checked={ props.messageAlerts } />
        </div>
    )
}

export default GeneralSettings;