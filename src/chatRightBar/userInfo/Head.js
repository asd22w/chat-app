import React from 'react';

function Head(props) {
    return (
        <div class="chat-user-head">
            <div class="row align-items-center">
                <div class="col-9">                                                
                    <h5>User Info</h5>
                </div>
                <div class="col-3">
                    <ul class="list-inline float-right mb-0">
                        <li class="list-inline-item">
                            <a onClick={ props.handleClick } href="#"><i class="feather icon-x"></i></a>
                        </li>
                    </ul>                                            
                </div>
            </div>                                    
        </div>
    )
}

export default Head;