import React, { useState } from 'react';

function Checkbox(props) {
    let [checked, setChecked] = useState(false);

    return (
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" checked={ checked } />
            <label onClick={ 
                (e) => {
                    setChecked( !checked );
                    props.handleSelect(props.user, !checked);
                }
            } class="custom-control-label"></label>
        </div>
    )
}

export default Checkbox;