import React from 'react';
import Userbar from './Userbar.js';
import AboutSection from './AboutSection.js';
import SocialProfileSection from './SocialProfileSection.js';
import SettingsSection from './SettingsSection.js';
import man from '../../images/men.svg';

function Body(props) {
    return (
        <div class="chat-user-body">
            <Userbar name={ props.data.name } location={ props.data.location } image={ man } />
            <div class="user-detail">
                <p class="user-detail-header">About</p>
                <AboutSection status={ props.data.status } email={ props.data.email } />
                <p class="user-detail-header">Social Profile</p>
                <SocialProfileSection twitter={ props.data.twitter } facebook={ props.data.facebook } instagram={ props.data.instagram } />                                    
                <p class="user-detail-header">Settings</p>
                <SettingsSection />
            </div>
        </div>  
    )
}

export default Body;