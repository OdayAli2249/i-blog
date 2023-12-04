import React, { useRef, useState } from 'react';
import './paragraph_element_tag_field_style.scss';
import TextFieldControlComponent from '../../core/input_components/controls/text_field_control_component';
import ButtonComponent from '../../core/button_component';


function ParagraphElementTagFieldComponent(props) {

    const [tag, setTag] = useState('');
    const textFieldRef = useRef(null);

    return (
        <div className={'paragraph-element-tag-field-root'}>
            <TextFieldControlComponent
                ref={textFieldRef}
                initialValue={props.initailValue}
                hint={props.hint}
                onChange={(value) => {
                    setTag(value)
                }}
            />
            <div className='paragraph-element-tag-field-row'>
                <ButtonComponent width={'50px'} height={'50px'} onClicked={() => {
                    props.onSend(tag)
                    textFieldRef.current.clear();
                }} />
            </div>
        </div>
    );
}

export default ParagraphElementTagFieldComponent;