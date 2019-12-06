import React from 'react';
import MenuOption from './MenuOption.js';

function ChatMenu(props) {
    return (
        <div className="chat-menu">
            <ul className="nav nav-pills nav-justified mb-0" id="pills-tab-justified" role="tablist">
                <MenuOption iconClassName='icon-message-circle' active={ props.activeMenu == 0 ? true : false } selectTab={ () => props.selectTab(0) } />
                <MenuOption iconClassName='icon-edit-1' active={ props.activeMenu == 1 ? true : false } selectTab={ () => props.selectTab(1) } />
                <MenuOption iconClassName='icon-user' active={ props.activeMenu == 2 ? true : false } selectTab={ () => props.selectTab(2) } />
                <MenuOption iconClassName='icon-settings' active={ props.activeMenu == 3 ? true : false } selectTab={ () => props.selectTab(3) } />
            </ul>
        </div>
    )
}

export default ChatMenu;