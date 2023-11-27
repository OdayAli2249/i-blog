import React from 'react';
import './add_paragraph_dashboard_element_style.scss';

function AddParagraphDashboardElementComponent(props) {
    return (
        <div className='add-paragraph-dashboard-element-root'
            onClick={() => {
                props.onClicked()
            }}>
            <h4 className='standard-text'>Add+</h4>
        </div>
    );
}

export default AddParagraphDashboardElementComponent;