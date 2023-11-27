import React from 'react';
import './add_paragraph_card_style.scss';

function AddParagraphCardComponent(props) {
    return (
        <div className='add-paragraph-card-root'
            onClick={() => props.onClicked()}>
            +
        </div>
    );
}

export default AddParagraphCardComponent;