import React from 'react';
import TabContent from './TabContent.js';
import ChatMenu from './ChatMenu.js';

class ChatLeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(tabNumber) {
        this.setState({
            activeTab: tabNumber
        })
    }

    render() {
        return (
            <div className='chat-leftbar'>
                <TabContent activeTab={ this.state.activeTab }
                selectMate={ this.props.selectMate } selected={ this.props.selected }
                openModal={ this.props.openModal } wHeight={ this.props.wHeight }
                />
                <ChatMenu selectTab={ this.selectTab } activeMenu={ this.state.activeTab } selected={ this.props.selected } />
            </div>
        )
    }
}

export default ChatLeftBar;