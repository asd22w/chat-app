import React from 'react';
import UserIconsList from './UserIconsList.js';
import AddUsers from './AddUsers.js';
import UserList from './UsersList.js';
import boy from '../images/boy.svg';
import SubmitButton from './SubmitButton.js';
import Input from './Input.js';
import Textarea from './Textarea.js';

class ModalBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addedUsers : [],
            groupName : '',
            groupDescription : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state.addedUsers);
        e.preventDefault();
    }

    handleSelect(user, add) {
        const users = this.state.addedUsers.slice(0);
        if(add) users.push(user); else users.splice( users.indexOf(user), 1 );
        this.setState({
            addedUsers: users
        })
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div class="modal-body">
                <form onSubmit={ this.handleSubmit }>
                    <Input handleChange={ this.handleInput } />
                    <Textarea handleChange={ this.handleInput } />
                    <p class="create-group-header">Added Users</p>
                    <UserIconsList users={ this.state.addedUsers } />
                    <AddUsers />
                    <UserList users={ this.props.users } handleSelect={ this.handleSelect } avatar={ boy } />
                    <SubmitButton />
                </form>
            </div>
        )
    }
}

export default ModalBody;