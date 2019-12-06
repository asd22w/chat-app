import React from 'react';

function ChangePhoto(props) {
    return (
        <div className="profile-edit">
            <i className="feather icon-camera upload-button"></i>
            <input className="profile-upload" type="file" accept="image/*"/>
        </div>  
    )
}

export default ChangePhoto;