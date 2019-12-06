import React from 'react';
import SettingsInputBlock from './SettingsInputBlock.js';

function SettingsSection(props) {
    return (
        <div class="user-setting">
            <SettingsInputBlock title='Mute Notifications' />
            <SettingsInputBlock title='Block Contact' />
        </div>
    )
}

export default SettingsSection;