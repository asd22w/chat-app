import React from 'react';
import StatusBar from './StatusBar.js';
import SocialMediaLinks from './SocialMediaLinks.js';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            isStatusOpen: false,
            name: 'vasyan',
            status: 'online'
        };
        this.imageRef = React.createRef();
        this.expandedRef = React.createRef();
        this.statusBarRef = React.createRef();
    }

    expandStatusBar() {
        if(this.state.isStatusOpen) {
            this.statusBarRef.current.classList.remove('active');
        } else {
            if(this.state.isExpanded) this.expandedRef.current.classList.remove('expanded');
            this.statusBarRef.current.classList.add('active');
        }
        this.setState({
            isStatusOpen: !this.state.isStatusOpen,
            isExpanded: false
        })
    }

    expandSocialMediaLinks() {
        if(this.state.isExpanded) {
            this.expandedRef.current.classList.remove('expanded');
        } else {
            if(this.state.isStatusOpen) this.statusBarRef.current.classList.remove('active');
            this.expandedRef.current.classList.add('expanded');
        }
        this.setState({
            isExpanded: !this.state.isExpanded,
            isStatusOpen: false
        })
    }

    selectStatus(status) {
        this.imageRef.current.classList.remove(this.state.status);
        this.imageRef.current.classList.add(status);
        this.setState({
            status: status
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='profile' ref={ this.expandedRef }>
                <div className='wrap'>
                    <img ref={ this.imageRef } onClick={ () => this.expandStatusBar() } id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt=""></img>
                    <p>{ this.state.status }</p>
                    <i onClick={ () => this.expandSocialMediaLinks() } className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                    <StatusBar statusBarRef={ this.statusBarRef } selectStatus={ status => this.selectStatus(status) } />
                    <SocialMediaLinks />
                </div>
            </div>
        )
    }
}

export default Profile;