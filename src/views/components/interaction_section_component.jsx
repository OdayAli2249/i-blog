import React from 'react';
import './interaction_section_style.scss';

function InteractionSectionComponent(props) {
    return (
        <div className='interactions-section-root'>
            <div className={props.interactions && props.interactions.share ? 'active-interactionn' : 'interaction'} >
                <div className='interaction-icon'></div>
                <h5 className='standard-text'>++++++</h5>
            </div>
            <div className='interaction' onClick={() => props.onShowComments()}>
                <div className='interaction-icon'></div>
                <h5 className='standard-text'>++++++</h5>
            </div>
            <div className='interaction' >
                <div className='interaction-icon'></div>
                <h5 className='standard-text'>++++++</h5>
            </div>
        </div>
    );
}

export default InteractionSectionComponent;