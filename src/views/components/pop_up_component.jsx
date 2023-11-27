import React from 'react';
import './pop_up_style.scss';

function PopUpComponent(props) {

    return (
        <div className='hover-box' style={{ top: props.top, height: props.height }}>
            <div className='pop-up-box' >
                {props.children}
            </div>
        </div>
    );
}

export default PopUpComponent