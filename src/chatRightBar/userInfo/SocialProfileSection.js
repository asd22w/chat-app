import React from 'react';

function SocialProfileSection(props) {
    return (
        <div class="user-social">
            <ul class="list-inline mb-0">
                <li class="list-inline-item">
                    <a href={ props.facebook } class="facebook"><i class="feather icon-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href={ props.twitter } class="twitter"><i class="feather icon-twitter"></i></a>
                </li>   
                <li class="list-inline-item">
                    <a href={ props.instagram } class="instagram"><i class="feather icon-instagram"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default SocialProfileSection;