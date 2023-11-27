import React from 'react';
import ButtonComponent from '../button_component';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import './error_component.scss';
import SpaceComponent from '../space_component';

function ErrorComponent(props) {

    return (
        <div className='error-component-root'>
            <h3 className='error-message'>{props.message}</h3>
            <SpaceComponent height={'20px'} />
            <img src={process.env.PUBLIC_URL +
                '/images/error.png'} className='error-image'></img>
            <SpaceComponent height={'20px'} />
            {props.retry == 'hide' ? <></> : <ButtonComponent label={'Retry'} icon={faRefresh} onClick={props.onRetry} />}
        </div>
    );
}

export default ErrorComponent;