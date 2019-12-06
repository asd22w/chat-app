import React from 'react';
import SettingsOption from './SettingsOption.js';

function PrivacySettings(props) {
    return (
        <div className="privacy-setting">                                                
            <SettingsOption handleChange={ () => props.handleChange('showPicture') } title='Show Profile Picture' checked={ props.showPicture } />
            <SettingsOption handleChange={ () => props.handleChange('allowMessagesFromStrangers') } title='Allow Messages from Strangers' 
            checked={ props.allowMessagesFromStrangers } />
        </div>
    )
}

export default PrivacySettings;