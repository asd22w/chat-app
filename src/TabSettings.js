import React from 'react';
import SettingsMain from './settings/SettingsMain.js';

class TabSettings extends React.Component {
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
                <SettingsMain wHeight={ this.props.wHeight } />
            </div>
        )
    }
}

export default TabSettings;