import React, { useRef, useState } from 'react';
import './paragraph_list_style.scss';
import ParagraphCardComponent from './cards/paragraph_card_component';
import AddParagraphCardComponent from './cards/add_paragraph_card_component';

function ParagraphListComponent(props) {

    const initialParagraphsState = {
        paragraphs: [
            {
                container: { name: 'container1', selected: false },
                elements: [
                    { name: 'text1', selected: false },
                    { name: 'text2', selected: false },
                    { name: 'image1', selected: false },
                    { name: 'image2', selected: false },
                    { name: 'image3', selected: false }
                ]
            },
            {
                container: { name: 'container2', selected: false },
                elements: [
                    { name: 'text1', selected: false },
                    { name: 'text2', selected: false },
                    { name: 'image1', selected: false },
                    { name: 'image2', selected: false },
                    { name: 'image3', selected: false }
                ]
            },
            {
                container: { name: 'container3', selected: false },
                elements: [
                    { name: 'text1', selected: false },
                    { name: 'text2', selected: false },
                    { name: 'image1', selected: false },
                    { name: 'image2', selected: false },
                    { name: 'image3', selected: false }
                ]
            },
            {
                container: { name: 'container4', selected: false },
                elements: [
                    { name: 'text1', selected: false },
                    { name: 'text2', selected: false },
                    { name: 'image1', selected: false },
                    { name: 'image2', selected: false },
                    { name: 'image3', selected: false }
                ]
            }
        ]
    }

    const [paragraphsState, setParagraphsState] = useState(initialParagraphsState);
    const refs = useRef([])

    const unselectAll = () => {
        const updatedParagraphState = [...paragraphsState.paragraphs];
        updatedParagraphState.map(paragraph => {
            paragraph.elements.map(element => element.selected = false);
            paragraph.container.selected = false;
        })

        return updatedParagraphState;
    }

    return (
        <div className='paragraph-list-root'>
            <div className='paragraph-list-body'>
                {paragraphsState.paragraphs.map((paragraph, idx) =>
                    <ParagraphCardComponent
                        ref={el => (refs.current[idx] = el)}
                        paragraph={paragraph}
                        key={idx}
                        onContainerClicked={() => {

                            const paragraphs = unselectAll();
                            paragraphs.map(paragraphItem => {
                                if (paragraphItem.container.name == paragraph.container.name)
                                    paragraphItem.container.selected = true;
                            })
                            const updatedParagraphs = [...paragraphs]

                            setParagraphsState({
                                paragraphs: updatedParagraphs
                            })
                        }}
                        onContainerDeleted={() => {
                            const updatedParagraphs = [...paragraphsState.paragraphs.filter(paragraphItem =>
                                paragraphItem.container.name != paragraph.container.name)]

                            setParagraphsState({
                                paragraphs: updatedParagraphs
                            })
                        }}
                        onElementAdded={(elementItem) => {
                            var updatedElements = [...paragraph.elements];
                            updatedElements.push(elementItem)
                            const updatedParagraphs = [...paragraphsState.paragraphs]
                            updatedParagraphs.map((paragraphItem, idx) => {
                                if (paragraph.container.name == paragraphItem.container.name)
                                    paragraphItem.elements = updatedElements;
                            })
                            setParagraphsState({ paragraphs: updatedParagraphs })
                        }}
                        onElementDeleted={(elementItem) => {
                            var updatedElements =
                                [...paragraph.elements.filter(element => element.name != elementItem.name)]
                            const updatedParagraphs = [...paragraphsState.paragraphs]
                            updatedParagraphs.map((paragraphItem, idx) => {
                                if (paragraph.container.name == paragraphItem.container.name)
                                    paragraphItem.elements = updatedElements;
                            })
                            setParagraphsState({ paragraphs: updatedParagraphs })
                        }}
                        onElementClicked={(elementItem) => {
                            var updatedElements = [...paragraph.elements];
                            updatedElements.map(element => {
                                if (element.name == elementItem.name)
                                    element.selected = true;
                                else element.selected = false;
                            })
                            const updatedParagraphs = [...paragraphsState.paragraphs]
                            updatedParagraphs.map((paragraphItem, idx) => {
                                if (paragraph.container.name == paragraphItem.container.name)
                                    paragraphItem.elements = updatedElements;
                                else {
                                    paragraphItem.elements.map(elementItem => elementItem.selected = false)
                                    refs.current[idx].unselectAll();
                                }
                            })
                            setParagraphsState({ paragraphs: updatedParagraphs })
                        }} />)}
                <AddParagraphCardComponent onClicked={() => {
                    setParagraphsState({
                        paragraphs: [...paragraphsState.paragraphs, {
                            container: { name: 'new container', selected: false },
                            elements: []
                        }]
                    })
                }} />
            </div>
        </div>
    );
}

export default ParagraphListComponent;