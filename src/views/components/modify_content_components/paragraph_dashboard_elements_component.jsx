import React, { useEffect, useState } from 'react';
import './paragraph_dashboard_elements_style.scss';
import ParagraphDashboardContainerCardComponent from './cards/paragraph_dashboard_container_card_component';
import ParagraphDashboardElementCardComponent from './cards/paragraph_dashboard_element_card_component';
import AddParagraphDashboardElementComponent from './cards/add_paragraph_dashboard_element_component';
import ParagraphElementTagFieldComponent from './controls/paragraph_element_tag_field_component';
import DialogComponent from '../core/dialog_components/dialog_component';

function ParagraphDashboardElementsComponent(props) {

    const [paragraphElementsState, setParagraphElementsState] = useState(props.initialParagraphElementsState);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        setParagraphElementsState(props.initialParagraphElementsState);
    }, [props.initialParagraphElementsState])

    return (
        <div className='paragraph-dashboard-elements-root'>
            <ParagraphDashboardContainerCardComponent />
            {paragraphElementsState.elements.map((element, idx) =>
                <ParagraphDashboardElementCardComponent key={idx} name={element.name}
                    selected={element.selected}
                    onDeleteClicked={() => {
                        let elements = [...paragraphElementsState.elements];
                        elements = elements.filter(elementItem => elementItem.name != element.name);
                        setParagraphElementsState({ elements });
                        props.onElementDeleted(element);
                    }}
                    onElementClicked={() => {
                        props.onElementClicked(element.name);
                    }} />)}
            <AddParagraphDashboardElementComponent onClicked={() => {
                setShowDialog(true);
            }} />
            {showDialog && <DialogComponent
                show={showDialog}
                height='40'
                width='60'
                onClose={() => {
                    setShowDialog(false)
                }}>
                <ParagraphElementTagFieldComponent
                    hint={'Write a tag...'}
                    initialValue={''}
                    onSend={(tag) => {
                        var newElement = { name: tag, selected: true };
                        setParagraphElementsState({
                            elements:
                                [...paragraphElementsState.elements, newElement]
                        });
                        props.onElementAdded(newElement)
                        setShowDialog(false);
                    }} />
            </DialogComponent>}
        </div>
    );
}

export default ParagraphDashboardElementsComponent;