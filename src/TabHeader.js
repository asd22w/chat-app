import React from 'react';
import TabLeftBar from './TabLeftBar.js';
import TabRightAction from './TabRightAction';

function Header(props) {
    let action = '';
    if(props.iconClass) {
        action = <div className="col-3">
                    <TabRightAction iconClass={ props.iconClass } action={ props.action } />
                </div>
    }

    return (
        <div className="chat-left-headbar">
            <div className="row align-items-center">
                <div className="col-9">
                    <TabLeftBar title={ props.title } />
                </div>
                { action }
            </div>
        </div>  
    )
}

export default Header;