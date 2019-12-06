import React from 'react';

function MenuOption(props) {
    const icon = 'feather ' + props.iconClassName;
    const active = props.active ? 'active' : '';
    const activeClass = 'nav-link ' + active;
    return (
        <li className="nav-item">
            <a href='#' onClick={ props.selectTab } className={ activeClass }><i className={ icon }></i></a>
        </li>
    )
}

export default MenuOption;