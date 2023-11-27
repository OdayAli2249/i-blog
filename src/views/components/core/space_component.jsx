import React from 'react';
import './space_style.scss';

function SpaceComponent(props) {
    return (
        <div className={props.size == 'large' ? 'space-large' :
            props.size == 'medium' ? 'space-medium' : 'space-small'} style={{
                height: props.height,
                width: props.width,
                backgroundColor: props.color,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                boxSizing: 'border-box'
            }} />
    );
}

export default SpaceComponent