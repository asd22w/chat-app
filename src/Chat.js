import React from 'react';
import ChatLeftBar from './ChatLeftBar.js';
import ChatRightBar from './chatRightBar/ChatRightBar.js';
import  {Modal} from './modal/Modal.js';
import boy from './images/boy.svg';
import LoginPage from './LoginPage.js';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mateID: 0,
            isModalOpen: false,
            userID: 0
        }
        this.selectMate = this.selectMate.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    selectMate(id) {
        this.setState({
            mateID: id
        })
    }

    handleModal() {
        console.log(1);
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    login(login, pass) {
        console.log(login, pass);
        // here will be made a request to the database
        this.setState({
            userID: 1 // id willl be returned from the database
        })
    }

    register(login, pass, username) {
        console.log(login, pass, username);

        this.setState({
            userID: 1
        })
    }

    render() {
        return (
            <div>
                { this.state.isModalOpen ? <Modal handler={ this.handleModal } users={ MESSAGES } /> : '' }
                { this.state.userID ? <div className="chat-layout">
                    <ChatLeftBar openModal={ this.handleModal } id={ this.state.mateID } 
                    selectMate={ this.selectMate } selected={ this.state.mateID } />
                    <ChatRightBar isActive={ this.state.mateID } closeChat={ () => this.selectMate(0) } />
                </div> : <LoginPage login={ this.login } register={ this.register } /> }
                
            </div>
        )
    }
}

// data example

const MESSAGES = [
    {message: 'Waiting for module 1 to finish...', date: '02:30 pm', unread: 0, name: 'Emily Cook', status: 'online', avatar: boy, textStatus: 'text adorable status' , userID: '1'},
    {message: 'Send your CV for more info...', date: 'Today', unread: 2, name: 'James Simeron', status: 'offline', avatar: boy, textStatus: 'text adorable status' , userID: '2'},
    {message: 'Could you please send PDF?', date: 'today', unread: 0, name: 'Nebraska Oshivo', status: 'dnd', avatar: boy, textStatus: 'text adorable status' , userID: '3'},
    {message: 'See you at the Lunch...', date: 'today', unread: 1, name: 'Noir Ajkeban', status: 'away', avatar: boy, textStatus: 'text adorable status' , userID: '4'},
    {message: 'How are you?', date: 'yesterdat', unread: 0, name: 'Jon Jones', status: 'online', avatar: boy, textStatus: 'text adorable status' , userID: '5'},
    {message: 'I am fine', date: '10.11.2019', unread: 3, name: 'Sophie Loren', status: 'offline', avatar: boy, textStatus: 'text adorable status' , userID: '6'}
];

export default Chat;