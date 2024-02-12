import React, { useEffect, useState } from 'react';
import './paragraph_element_content_style.scss';
import TextAreaControlComponent from '../../core/input_components/controls/text_area_control_component';
import DropDownMenuControlComponent from '../../core/input_components/controls/drop_down_menu_control_component';
import FilePickerControlComponent from '../../core/input_components/controls/file_picker_control_component';
import ButtonComponent from '../../core/button_component';

function ParagraphElementContentControl(props) {

    const [paragraphContentState, setParagraphContentState] = useState(props.initialParagraphContentState);
    useEffect(() => {
        setParagraphContentState(props.initialParagraphContentState);
    }, [props.initialParagraphContentState])

    return (
        <div className='paragraph-element-content-root'>
            <h4 className='standard-text'>Content</h4>
            <DropDownMenuControlComponent
                options={['text', 'image']}
                initialValue={paragraphContentState.type}
                onChange={(value) => {
                    setParagraphContentState({ ...paragraphContentState, type: value })
                }}
                errorMessage={''}
                label={''} />
            {paragraphContentState.type == 'text' && <TextAreaControlComponent
                label={''}
                initialValue={paragraphContentState.text ?? ''}
                height={'80px'}
                hint={'Enter text'}
                onChange={(value) => {
                    setParagraphContentState({ ...paragraphContentState, text: value, src: null })
                }} />}
            {paragraphContentState.type == 'image' && <FilePickerControlComponent
                label={''}
                accept={'images'}
                validator={() => { return 'done' }}
                onChange={(value) => {
                    var newParagraphContentState = { ...paragraphContentState, src: URL.createObjectURL(new Blob([value])), text: null }
                    setParagraphContentState(newParagraphContentState)
                    props.onApply(newParagraphContentState)
                }}
                errorMessage={''} />}
            {paragraphContentState.type == 'text' && <ButtonComponent label={'Apply'} onClicked={() => {
                props.onApply(paragraphContentState)
            }} />}
        </div>
    );
}

export default ParagraphElementContentControl;