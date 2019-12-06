import React from 'react';
import TabHeader from '../TabHeader.js';
import SettingsSection from './SettingsSection.js';
import ScrollbarCustom from '../ScrollbarCustom.js';

function SettingsMain(props) {
    return (
        <div className="chat-settingbar">
            <TabHeader title='Settings' />
            <ScrollbarCustom diff={ 70 }>
                <SettingsSection />
            </ScrollbarCustom>
        </div>
    )
} 

export default SettingsMain;