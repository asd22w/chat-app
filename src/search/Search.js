import React from 'react';
import SearchInput from './SearchInput.js';
import SearchButton from './SearchButton.js';

function Search(props) {
    return (
        <div className="chat-left-search">
            <form onSubmit={ (e) => props.handleSubmit(e) }>
                <div className="input-group">
                    <SearchInput value={ props.value } handleChange={ props.handleChange } />
                    <div className="input-group-append">
                        <SearchButton handleSubmit={ props.handleSubmit } />
                    </div>
                </div>
            </form>
        </div> 
    )
}

export default Search;