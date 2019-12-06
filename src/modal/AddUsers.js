import React from 'react';

function AddUsers() {
    return (
        <div class="add-users-search">
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="add-users-search-btn" />
                <div class="input-group-append">
                    <button class="btn" type="submit"><i class="feather icon-search"></i></button>
                </div>
            </div>
        </div> 
    )
}

export default AddUsers;