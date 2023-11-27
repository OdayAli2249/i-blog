import React, { useState } from 'react';
import TextFieldControlComponent from '../../core/input_components/controls/text_field_control_component';
import './paragraph_element_name_style.scss';

function ParagraphElementNameControl(props) {
    const [paragraphElementNameState, setParagraphElementNameState] = useState(props.initialParagraphElementNameState);

    return (
        <div className='paragraph-element-name-root'>
            <h4 className='standard-text'>Name</h4>
            <TextFieldControlComponent
                icon={null}
                hint={'Enter element name'}
                label={''}
                initialValue={paragraphElementNameState.name ?
                    paragraphElementNameState.name : ''}
                validator={() => { return 'done' }}
                onChange={(value) => {
                    setParagraphElementNameState({ ...paragraphElementNameState, name: value })
                }} />
            <h5 className='standard-text'>Name is required because its value used for element identification.</h5>
        </div>
    );
}

export default ParagraphElementNameControl;