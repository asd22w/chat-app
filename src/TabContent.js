import React from 'react';
import TabNewMessages from './TabNewMessages.js';
import TabMessages from './TabMessages.js';
import TabMyProfile from './TabMyProfile.js';
import TabSettings from './TabSettings.js';

class TabContent extends React.Component
{
    fadeIn(reff) {
        setTimeout(() => {
            reff.current.classList.add('shows');
        }, 5)
    }

    render() {
        let tab = '';
        switch (this.props.activeTab) {
            case 0:
                tab = <TabMessages wHeight={ this.props.wHeight } animate={ this.fadeIn } selectMate={ this.props.selectMate } selectedID={ this.props.selected } />
                break;
            case 1:
                tab = <TabNewMessages wHeight={ this.props.wHeight } animate={ this.fadeIn } selectMate={ this.props.selectMate } selectedID={ this.props.selected }
                openModal={ this.props.openModal }
                />
                break;
            case 2:
                tab = <TabMyProfile wHeight={ this.props.wHeight } animate={ this.fadeIn } />
                break;
            case 3:
                tab = <TabSettings wHeight={ this.props.wHeight } animate={ this.fadeIn } />
                break;
        }
        return (
            <div className='tab-content' id="pills-tab-justifiedContent">
                { tab }
            </div>
        )
    }
}

export default TabContent;