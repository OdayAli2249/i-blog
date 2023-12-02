import React, { forwardRef, useEffect, useState } from 'react';
import './paragraph_card_style.scss';
import ParagraphDashboardElementsComponent from '../paragraph_dashboard_elements_component';
import ButtonComponent from '../../core/button_component';

const ParagraphCardComponent = forwardRef((props, ref) => {

    const [paragraphState, setParagraphState] = useState(props.paragraph);

    const unselectAll = () => {
        const updatedElements = [...paragraphState.elements];
        updatedElements.map(element => element.selected = false);
        setParagraphState({ ...paragraphState, elements: updatedElements });
    };

    React.useImperativeHandle(ref, () => ({
        unselectAll
    }));

    useEffect(() => {
        setParagraphState(props.paragraph);
    }, [props])

    return (
        <div className='paragraph-card-root'>
            <div>
                <ButtonComponent onClicked={() => {
                    props.onContainerDeleted();
                }} />
                <div className={paragraphState.container.selected ?
                    'selected-paragraph-container-card' : 'paragraph-container-card'}
                    onClick={() => {
                        props.onContainerClicked()
                    }}></div>
            </div>
            {/* to do: make separate component for this*/}
            <div className='paragraph-elements-section'>
                <ParagraphDashboardElementsComponent
                    initialParagraphElementsState={{ elements: paragraphState.elements }}
                    onElementDeleted={(element) => {
                        props.onElementDeleted(element)
                        // var updatedElements =
                        //     [...paragraphState.elements.filter(elementItem => elementItem.name != element.name)]
                        // setParagraphState({ ...paragraphState, elements: updatedElements })
                    }}
                    onElementAdded={(element) => {
                        props.onElementAdded(element)
                        // var updatedElements = [...paragraphState.elements];
                        // updatedElements.push(element)
                        // setParagraphState({ ...paragraphState, elements: updatedElements })
                    }}
                    onElementClicked={(elementName) => {
                        props.onElementClicked({ name: elementName })
                        // var updatedElements = [...paragraphState.elements];
                        // updatedElements.map(element => {
                        //     if (element.name == elementName)
                        //         element.selected = true;
                        //     else element.selected = false;
                        // })
                        // setParagraphState({ ...paragraphState, elements: updatedElements })
                    }} />
            </div>
        </div>
    );
})

export default ParagraphCardComponent;