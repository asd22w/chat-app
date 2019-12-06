import React from 'react';
import ChangePhoto from './ChangePhoto.js';
import boy from '../images/boy.svg';

function Profilebar(props) {
    return (
        <div className="profilebar">
            <img className="profile-pic img-fluid" src={ boy } alt="profile-pic" />  
            <ChangePhoto />
            <h5>{ props.name }</h5>
            <p className="mb-0">{ props.location }</p>                                            
        </div> 
    )
}

export default Profilebar;