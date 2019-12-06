import React from 'react';
import SwitchInput from './SwitchInput.js';

function SettingsInputBlock(props) {
    return (
        <div class="row align-items-center pb-3">
        <div class="col-9"><h6 class="mb-0">{ props.title }</h6></div>
            <div class="col-3 text-right">
                <SwitchInput />
            </div>
        </div>
    )
}

export default SettingsInputBlock;