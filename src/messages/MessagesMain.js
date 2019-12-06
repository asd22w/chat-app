import React from 'react';
import TabHeader from '../TabHeader.js';
import Search from '../search/Search.js';
import Messages from './Messages.js';

function MessagesMain(props) {
    return (
        <div className="chat-listbar">
            <TabHeader title={ props.title } iconClass={ props.iconClass } action={ props.action } />
            <Search value={ props.value } handleChange={ props.handleChange } handleSubmit={ props.handleSubmit } />                                    
            <Messages wHeight={ props.wHeight } messages={ props.messages } selectMate={ props.selectMate } selectedID={ props.selectedID }
                filter={ props.filter }
            />                                       
        </div>    
    )
}

export default MessagesMain;