import React, { useEffect, useState } from 'react';
import './paragraph_dashboard_elements_style.scss';
import ParagraphDashboardContainerCardComponent from './cards/paragraph_dashboard_container_card_component';
import ParagraphDashboardElementCardComponent from './cards/paragraph_dashboard_element_card_component';
import AddParagraphDashboardElementComponent from './cards/add_paragraph_dashboard_element_component';

function ParagraphDashboardElementsComponent(props) {

    const [paragraphElementsState, setParagraphElementsState] = useState(props.initialParagraphElementsState);

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
                var newElement = { name: 'new element', selected: false };
                setParagraphElementsState({
                    elements:
                        [...paragraphElementsState.elements, newElement]
                });
                props.onElementAdded(newElement)
            }} />
        </div>
    );
}

export default ParagraphDashboardElementsComponent;