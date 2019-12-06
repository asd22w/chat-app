import React from 'react';
import TabHeader from '../TabHeader.js';
import ProfileBody from './ProfileBody.js';
import ScrollbarCustom from '../ScrollbarCustom.js';
function ProfileMain(props) {
    return (
        <div className="chat-profilebar">
            <TabHeader title={ "My Profile"} />
            <ScrollbarCustom diff={ 70 }>
                <ProfileBody />
            </ScrollbarCustom> 
        </div>
    )
}

export default ProfileMain;