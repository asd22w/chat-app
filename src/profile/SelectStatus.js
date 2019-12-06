import React from 'react';

function SelectStatus(props) {
    const style = {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none'
    }
    return (
        <select onChange={ props.handleChange } value={ props.value } name="statusVisibility" className="form-control" style={style}>
            <option value='online'>Online</option>
            <option value='away'>Away</option>
            <option value='dnd'>Do not distrub</option>
            <option value='offline'>Offline</option>
        </select>
    )
}

export default SelectStatus;