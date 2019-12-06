import React from 'react';
import ProfileMain from './profile/ProfileMain.js';

class TabMyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.contRef = React.createRef();
    }

    componentDidMount() {
        this.props.animate(this.contRef);
    }

    render() {
        return (
            <div ref={ this.contRef } className='tab-pane'>
                <ProfileMain  wHeight={ this.props.wHeight } />
            </div>
        )
    }
}


export default TabMyProfile;