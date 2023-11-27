import React from 'react';
import './button_style.scss';

function ButtonComponent(props) {
    return (
        <div className='button-root' onClick={() => { if (props.type != 'link') props.onClicked() }}
            style={{ width: props.width, height: props.height }}>
            {props.type == 'link' ? <a href={props.to}>{props.label}</a> : props.label}
        </div>
    );
}

export default ButtonComponent