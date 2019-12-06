import React from 'react';
import BackArrow from './BackArrow.js';
import Dropdown from './Dropdown.js';

function RightMenu(props) {
    return (
        <div class="col-6">
            <ul class="list-inline float-right mb-0">                                        
                <Dropdown relation={ props.relation } handleFriend={ props.handleFriend } mute={ props.mute } openUserInfo={ props.openUserInfo }  />
                <BackArrow closeChat={ props.closeChat } />
            </ul>                                            
        </div>
    )
}

export default RightMenu; 