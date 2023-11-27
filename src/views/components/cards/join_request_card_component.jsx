import React from 'react';
import './join_request_card_style.scss';
import ButtonComponent from '../core/button_component';

function JoinRequestCardComponent(props) {
    return (
        <div className='join-request-card-root'>
            <h3 className='standard-text'>{props.joinRequest.name}</h3>
            <div>
                <h3 className='standard-text'>{props.joinRequest.status}</h3>
                {props.joinRequest.status == 'pending' &&
                    <ButtonComponent label={'Ignore'} onClicked={() => { props.onIgnore() }} />}
                {props.joinRequest.status == 'pending' &&
                    <ButtonComponent label={'Confirm'} onClicked={() => { props.onConfirm() }} />}
            </div>
        </div>
    );
}

export default JoinRequestCardComponent;