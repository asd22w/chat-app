import React from 'react';

function SearchInput(props) {
    return (
        <input value={ props.value } onChange={ (e) => props.handleChange(e) } type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="chat-left-search-btn" />
    )
}

export default SearchInput;