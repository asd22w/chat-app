import React from 'react';
import Logo from './Logo.js';

function TabLeftBar(props) {
    return (
        <ul className="list-unstyled mb-0">
            <li className="media">
                <Logo />
                <div className="media-body">
                    <h5 className="mb-0 mt-2">{ props.title }</h5>
                </div>
            </li>
        </ul>
    )
}

export default TabLeftBar;