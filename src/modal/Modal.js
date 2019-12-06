import React, { useEffect } from 'react';
import Header from './ModalHeader.js';
import Body from './ModalBody.js';

export function Modal(props) {
    useEffect(() => {
        const modal = document.getElementById('createGroup');
        modal.onclick = (e) => {
            if(!e.target.closest('#closeModal')) props.handler();
        }
    })

    return (
        <div class="modal create-group-modal modal-cl " id="createGroup">
            <div class="modal-dialog modal-dialog-centered" id='closeModal' role="document">
                <div class="modal-content">
                    <Header />
                    <Body users={ props.users } />
                </div>
            </div>
    </div>
    )
}