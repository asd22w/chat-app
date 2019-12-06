import React from 'react';

function AboutSection(props) {
    return (
        <div class="user-about">
            <h6><i class="feather icon-heart mr-2"></i>{ props.status }</h6>
            <h6 class="my-3"><i class="feather icon-mail mr-2"></i>{ props.email }</h6>
        </div>
    )
}

export default AboutSection;