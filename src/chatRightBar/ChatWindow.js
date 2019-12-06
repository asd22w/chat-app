import React from 'react';
import ChatHead from './ChatHead.js';
import ChatBody from './ChatBody.js';
import ChatBottom from './ChatBottom.js';

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: props.DATA[0],
            messages: props.DATA[1]
        }
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(text) {
        console.log('message sent');
        const messages = this.state.messages.slice(0);
        messages.push({
            message: text, date: Date.now(), name: 'User Name', userID: 'My user ID', messageID: 'message id'
        })
        this.setState({
            messages: messages
        })
    }


    
    render() {
        return (
            <div className='chat-detail'>
                <ChatHead userInfo={ this.state.userInfo } openUserInfo={ this.props.openUserInfo } closeChat={ this.props.closeChat } />
                <ChatBody messages={ this.state.messages } />
                <ChatBottom isUserInfoOpened={ this.props.isUserInfoOpened } sendMessage={ this.sendMessage } />
            </div>
        )
    }
}

export default ChatWindow;