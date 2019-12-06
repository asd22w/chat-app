import React from 'react';
import ProfileInput from './profile/ProfileInput.js';

function ProfileDetail(props) {
    return (
        <div className="profile-detail">
            <ul className="list-unstyled mb-0">
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='name' name={ 'Username' } type={ 'text' } value={ props.name } />
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='location' name={ 'Location' } type={ 'text' } value={ props.location } />
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='status' name={ 'Status' } type={ 'text' } value={ props.status } />
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='email' name={ 'Email ID' } type={ 'email' } value={ props.email } />
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='password' name={ 'Password' } type={ 'password' } value={ props.password } />           
                <ProfileInput
                handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='statusVisibility' name={ 'Visibility' } type={ 'select' } value={ props.statusVisibility } />      
                <ProfileInput  handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='facebook' name={ 'Facebook' } type={ 'text' } value={ props.facebook } />      
                <ProfileInput  handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='insta' name={ 'Instagrem' } type={ 'text' } value={ props.insta } />    
                <ProfileInput  handleUpdate={ props.handleUpdate } handleChange={ props.handleChange } 
                inputName='twitter' name={ 'Twitter' } type={ 'text' } value={ props.twitter } />                   
            </ul>
        </div>
    )
} 

export default ProfileDetail;