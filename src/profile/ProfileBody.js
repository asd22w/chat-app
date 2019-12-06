import React from 'react';
import Profilebar from './Profilebar.js';
import ProfileDetail from '../ProfileDetail.js';

class ProfileBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: USERINFORMATION.name,
            location: USERINFORMATION.location,
            password: USERINFORMATION.password,
            status: USERINFORMATION.status,
            email: USERINFORMATION.email,
            statusVisibility: USERINFORMATION.statusVisibility,
            facebook: USERINFORMATION.facebook,
            insta: USERINFORMATION.insta,
            twitter: USERINFORMATION.twitter
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    handleUpdate(name, value) {
        console.log('name : ', name, ' value : ', value);
    }
    
    render() {
        return (
            <div className="chat-left-body">
                <Profilebar name={ this.state.name } location={ this.state.location } />
                <ProfileDetail name={ this.state.name } location={ this.state.location } 
                statusVisibility={ this.state.statusVisibility } password={ this.state.password }
                email={ this.state.email } status={ this.state.status } handleChange={ this.handleChange }
                handleUpdate={ this.handleUpdate } twitter={ this.state.twitter } facebook={ this.state.facebook }
                insta={ this.state.insta }
                />                                            
            </div>
        )
    }
}

// data example 

const USERINFORMATION = {name: 'Will Patinson', location: 'Florida, USA', password: '*****', status: 'I am on Gappa', email: 'demo@example.com', statusVisibility: 'online'
,facebook: 'face', twitter: 'twit', insta: 'insta'
};

export default ProfileBody;