import React from 'react';

function TabRightAction(props) {
    const icn = 'feather ' + props.iconClass;
    return (
        <a onClick={ props.action }><i className={ icn }></i></a>
    )
}

export default TabRightAction