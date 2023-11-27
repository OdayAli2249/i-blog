import React from 'react';
import './multiple_selection_style.scss';

function MultipleSelectionComponent(props) {
    return (
        <div className='multiple-selection-option-root'>
            <h4 className='standard-text'>{props.title}</h4>
            <div className={props.row ? 'multiple-selection-option-container-4f' :
                props.column ? 'multiple-selection-option-container-1f' : 'multiple-selection-option-container-2f'}>
                {props.options.map((option, idx) =>
                    <div key={idx} className={props.selectedOption == idx ? 'selected-option' :
                        'option'} onClick={() => { props.onOptionClicked(idx) }}>
                        <div className='multiple-selection-option-icon'></div>
                        <h5 className='standard-text'>{option}</h5>
                    </div>)}
            </div>
        </div>
    );
}

export default MultipleSelectionComponent;