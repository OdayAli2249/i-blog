import React, { useState } from 'react';
import './paragraph_dashboard_wrapper_style.scss';
import ParagraphDashboardElementsComponent from './paragraph_dashboard_elements_component';
import ParagraphContainerShapeControl from './controls/paragraph_container_shape_control';
import ParagraphElementColorControl from './controls/paragraph_element_color_control';
import ParagraphElementSizeControl from './controls/paragraph_element_size_control';
import ParagraphElementContentControl from './controls/paragraph_element_content_control';
import ParagraphElementPositionControl from './controls/paragraph_element_position_control';
import ParagraphElementNameControl from './controls/paragraph_element_name_control';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../../redux/actions';

function ParagraphDashboardWrapperComponent(props) {

    // const [paragraphState, setParagraphState] = useState({
    //     elements: [
    //         { name: 'text1' },
    //         { name: 'text2' },
    //         { name: 'image1' },
    //         { name: 'image2' },
    //     ]
    // });


    const dispatch = useDispatch();
    const paragraphsState = useSelector(state => state.modifyContent);


    return (
        <div className='paragraph_dashboard_wrapper_root'>
            {paragraphsState.focusedParagraph && <ParagraphDashboardElementsComponent
                initialParagraphElementsState={{ elements: paragraphsState.focusedParagraph.elements }}
                onElementDeleted={(elementItem) => {
                    dispatch({ type: Actions.ON_ELEMENT_DELETED, paragraph: paragraphsState.focusedParagraph, elementItem })
                }}
                onElementClicked={(element) => {
                    dispatch({ type: Actions.ON_ELEMENT_CLICKED, paragraph: paragraphsState.focusedParagraph, elementItem: { name: element } })
                }}
                onElementAdded={(elementItem) => {
                    dispatch({ type: Actions.ON_ELEMENT_ADDED, paragraph: paragraphsState.focusedParagraph, elementItem })
                }} />}
            {/* <ParagraphElementNameControl initialParagraphElementNameState={{ name: 'new element' }} /> */}
            {/* <ParagraphContainerShapeControl
                initialParagraphContainerShapeState={{ showAllShapes: false, showCustomizeOption: false }} /> */}
            {/* <ParagraphElementColorControl
                initialParagraphElementColorState={{ showAllColors: false, showCustomizeOption: false }} /> */}
            {/* <ParagraphElementSizeControl
                initialParagraphElementSizeState={{ showCustomizeOption: false, selectedOption: 0 }} />
            <ParagraphElementContentControl initialParagraphContentState={{ type: 'Text' }} /> */}
            {/* <ParagraphElementPositionControl initialParagraphElementPositionState={{
                x: 50, y: 700
            }} /> */}

        </div>
    );
}

export default ParagraphDashboardWrapperComponent;