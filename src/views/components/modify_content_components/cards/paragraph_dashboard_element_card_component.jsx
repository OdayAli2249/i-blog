import React from 'react';
import './paragraph_dashboard_element_card_style.scss';

function ParagraphDashboardElementCardComponent(props) {
    return (
        <div className={props.selected ? 'selected-paragraph-dashboard-element-card-root' :
            'paragraph-dashboard-element-card-root'}>
            <h4 className='standard-text' onClick={() => {
                props.onElementClicked()
            }}>{props.name}</h4>
            <h4 className='standard-text paragraph-dashboard-element-remove'
                onClick={() => {
                    props.onDeleteClicked()
                }}>Del</h4>
        </div>
    );
}

export default ParagraphDashboardElementCardComponent;