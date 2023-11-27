import React from 'react';
import './event_card_style.scss';
import MultipleSelectionComponent from '../core/multiple_selection_component';

function EventCardComponent(props) {
    return (
        <div className='event-card-root' style={{ height: props.height }}
        onClick={() => {
            props.onClick();
        }}>
            <h4 className='standard-text'>
                {props.event.name}
            </h4>
            <h4 className='standard-text'>
                {'+++++++++++++++++++++++++++++++++++++++++++'}
            </h4>
            {props.view.list ? <MultipleSelectionComponent selectedOption={null}
                row={true}
                options={['++++', '++++++', '++++', '++++++']}
                onOptionClicked={() => { }} /> : <></>}
            {!props.view.list ? <>
                <MultipleSelectionComponent selectedOption={null} options={['++++', '++++++']}
                    onOptionClicked={() => { }} />
                <div className='divider'></div>
                <MultipleSelectionComponent selectedOption={null} options={['++++', '++++++']}
                    onOptionClicked={option => { }} />
            </> : <></>}
        </div>
    );
}

export default EventCardComponent;