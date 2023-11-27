import React, { useState } from 'react';
import './subscribtion_status_style.scss';
import SpaceComponent from '../core/space_component';

function SubscribtionStatusComponent(props) {

    const [selectedOption, setSelectedOption] = useState(props.subscribtionStatus);

    const subscribtionStatusList = [
        'All', 'Personalized', 'None', 'Unsubscribe'
    ]

    return (
        <div className='subscribtion-status-root'>
            <div className={selectedOption == subscribtionStatusList[0] ? 'selected-subscribtion-status' : null}
                onClick={() => { setSelectedOption(subscribtionStatusList[0]) }}>
                {subscribtionStatusList[0]}
            </div>
            <div className={selectedOption == subscribtionStatusList[1] ? 'selected-subscribtion-status' : null}
                onClick={() => { setSelectedOption(subscribtionStatusList[1]) }}>
                {subscribtionStatusList[1]}
            </div>
            <div className={selectedOption == subscribtionStatusList[2] ? 'selected-subscribtion-status' : null}
                onClick={() => { setSelectedOption(subscribtionStatusList[2]) }}>
                {subscribtionStatusList[2]}
            </div>
            <div className={selectedOption == subscribtionStatusList[3] ? 'selected-subscribtion-status' : null}
                onClick={() => { setSelectedOption(subscribtionStatusList[3]) }}>
                {subscribtionStatusList[3]}
            </div>
            <SpaceComponent height={'20px'} />
            <h3 onClick={() => { props.onSubscribtionStatusSelected(selectedOption) }} className='standard-text'>Ok</h3>
        </div>
    );
}

export default SubscribtionStatusComponent;