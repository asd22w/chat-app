import { Scrollbars } from 'react-custom-scrollbars'
import React, { useRef, useEffect } from 'react';

function ScrollbarCustom(props) {
    let prev = window.innerHeight - props.diff;
    useEffect(() => {
        if(!scroll) return;
        window.addEventListener('resize', handleResize)
        function handleResize() {
            if(prev == window.innerHeight - props.diff) return;
            scroll.current.container.style.height = window.innerHeight - props.diff + 'px';
            prev = window.innerHeight - props.diff;
        }
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    let scroll = useRef(undefined);

    return (
        <Scrollbars autoHide
        autoHideTimeout={400}
        autoHideDuration={200} ref={ scroll } style={{ width: 'auto', height: window.innerHeight - props.diff }}>
            { props.children }
        </Scrollbars>
    )
}

export default ScrollbarCustom;