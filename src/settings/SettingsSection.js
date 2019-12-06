import React from 'react';
import GeneralSettings from './GeneralSettings.js';
import PrivacySettings from './PrivacySettings.js';

class SettingsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationSounds: userSettings.notificationSounds,
            messageAlerts: userSettings.messageAlerts,
            showPicture: userSettings.showPicture,
            allowMessagesFromStrangers: userSettings.allowMessagesFromStrangers
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        console.log(name, ' : ' ,!this.state[name])
        this.setState({
            [name]: !this.state[name]
        })
    }

    render() { 
        return (
            <div className="chat-left-body">
                <p className="setting-header">General Settings</p>
                <GeneralSettings handleChange={ this.handleChange } notificationSounds={ this.state.notificationSounds }
                messageAlerts={ this.state.messageAlerts }
                />
                <p className="setting-header">Privacy Settings</p>
                <PrivacySettings handleChange={ this.handleChange } showPicture={ this.state.showPicture } 
                allowMessagesFromStrangers={ this.state.allowMessagesFromStrangers } />
            </div>
        )
    }
}

// data example 

const userSettings = { notificationSounds: true, messageAlerts: true, showPicture: true, allowMessagesFromStrangers: false }

export default SettingsSection;