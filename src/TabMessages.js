import React from 'react';
import MessagesMain from './messages/MessagesMain.js';
import { Scrollbars } from 'react-custom-scrollbars'

class TabMessages extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: ''
        }
        this.contRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        alert('logout has been made')
    }

    handleChange(event) {
        if( event.target.value.length == 0 ) {
            this.setState( {
                search: event.target.value,
                filter: event.target.value
            } )
        } else {
            this.setState({
                search: event.target.value
            })
        }
    }

    handleSubmit(event) {
        this.setState({
            filter: this.state.search
        })
        event.preventDefault();
    }

    componentDidMount() {
        this.props.animate(this.contRef);
    }

    render() {
        return (
            <div ref={ this.contRef } className='tab-pane'>
                    <MessagesMain  value={ this.state.search } handleChange={ this.handleChange } 
                    handleSubmit={ this.handleSubmit } search={ this.state.search }  title={ 'Chat' } 
                    iconClass={ "icon-log-out" } messages={ MESSAGES } selectMate={ this.props.selectMate } 
                    selectedID={ this.props.selectedID } filter={ this.state.filter } action={ this.handleLogout }  wHeight={ this.props.wHeight }  />                   
            </div>
        )
    }
}

// data example 

const MESSAGES = [
    {message: 'Waiting for module 1 to finish...', date: '02:30 pm', unread: 0, name: 'Emily Cook', status: 'online', avatar: 'boy', userID: '1'},
    {message: 'Send your CV for more info...', date: 'Today', unread: 2, name: 'James Simeron', status: 'offline', avatar: 'boy', userID: '2'},
    {message: 'Could you please send PDF?', date: 'today', unread: 0, name: 'Nebraska Oshivo', status: 'dnd', avatar: 'boy', userID: '3'},
    {message: 'See you at the Lunch...', date: 'today', unread: 1, name: 'Noir Ajkeban', status: 'away', avatar: 'boy', userID: '4'},
    {message: 'How are you?', date: 'yesterdat', unread: 0, name: 'Jon Jones', status: 'online', avatar: 'boy', userID: '5'},
    {message: 'I am fine', date: '10.11.2019', unread: 3, name: 'Sophie Loren', status: 'offline', avatar: 'boy', userID: '6'},
    {message: 'Waiting for module 1 to finish...', date: '02:30 pm', unread: 0, name: 'Emily Cook', status: 'online', avatar: 'boy', userID: '7'},
    {message: 'Send your CV for more info...', date: 'Today', unread: 2, name: 'James Simeron', status: 'offline', avatar: 'boy', userID: '8'},
    {message: 'Could you please send PDF?', date: 'today', unread: 0, name: 'Nebraska Oshivo', status: 'dnd', avatar: 'boy', userID: '9'},
    {message: 'See you at the Lunch...', date: 'today', unread: 1, name: 'Noir Ajkeban', status: 'away', avatar: 'boy', userID: '10'},
    {message: 'How are you?', date: 'yesterdat', unread: 0, name: 'Jon Jones', status: 'online', avatar: 'boy', userID: '11'},
    {message: 'I am fine', date: '10.11.2019', unread: 3, name: 'Sophie Loren', status: 'offline', avatar: 'boy', userID: '12'}
];

export default TabMessages;