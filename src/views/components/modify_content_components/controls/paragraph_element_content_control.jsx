import React, { useState } from 'react';
import './paragraph_element_content_style.scss';
import TextAreaControlComponent from '../../core/input_components/controls/text_area_control_component';
import DropDownMenuControlComponent from '../../core/input_components/controls/drop_down_menu_control_component';
import FilePickerControlComponent from '../../core/input_components/controls/file_picker_control_component';

function ParagraphElementContentControl(props) {

    const [paragraphContentState, setParagraphContentState] = useState(props.initialParagraphContentState);

    return (
        <div className='paragraph-element-content-root'>
            <h4 className='standard-text'>Content</h4>
            <DropDownMenuControlComponent
                options={['Text', 'Image']}
                initialValue={paragraphContentState.type}
                onChange={(value) => {
                    setParagraphContentState({ ...paragraphContentState, type: value })
                }}
                errorMessage={''}
                label={''} />
            {paragraphContentState.type == 'Text' && <TextAreaControlComponent
                label={''}
                initialValue={paragraphContentState.text ?? ''}
                height={'80px'}
                hint={'Enter text'}
                onChange={(value) => {
                    setParagraphContentState({ ...paragraphContentState, text: value })
                }} />}
            {paragraphContentState.type == 'Image' && <FilePickerControlComponent
                label={''}
                accept={'images'}
                validator={() => { return 'done' }}
                onChange={(value) => {
                    setParagraphContentState({ ...paragraphContentState, image: value })
                }}
                errorMessage={''} />}
        </div>
    );
}

export default ParagraphElementContentControl;