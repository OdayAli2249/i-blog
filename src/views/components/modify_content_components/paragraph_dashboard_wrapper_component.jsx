import React, { useEffect, useState } from 'react';
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
import ContainerDashboardWrapperComponent from './container_dashboard_wrapper_component';
import ElementDashboardWrapperComponent from './element_dashboard_wrapper_component';

function ParagraphDashboardWrapperComponent(props) {

    const dispatch = useDispatch();
    const paragraphsState = useSelector(state => state.modifyContent);
    const [selectedElement, setSelectedElement] = useState(null);
    useEffect(() => {
        if (!paragraphsState.focusedParagraph)
            setSelectedElement(null);
        if (paragraphsState.focusedParagraph && paragraphsState.focusedParagraph.container.selected) {
            setSelectedElement(null);
        }
        if (paragraphsState.focusedParagraph && !paragraphsState.focusedParagraph.container.selected) {
            paragraphsState.focusedParagraph.elements.map(element => {
                if (element.selected)
                    setSelectedElement(element);
            })
        }
    }, [paragraphsState])


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
            {paragraphsState.focusedParagraph && paragraphsState.focusedParagraph.container.selected &&
                <ContainerDashboardWrapperComponent container={paragraphsState.focusedParagraph.container}
                    onChanged={(container) => {
                        dispatch({ type: Actions.ON_CONTAINER_CHANGED, container })
                    }} />}
            {selectedElement &&
                < ElementDashboardWrapperComponent element={selectedElement}
                    onChanged={(element, property) => {
                        dispatch({ type: Actions.ON_ELEMENT_CHANGED, element, property })
                    }} />}
        </div>
    );
}

export default ParagraphDashboardWrapperComponent;