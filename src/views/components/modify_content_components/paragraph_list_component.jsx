import React, { useRef, useState } from 'react';
import './paragraph_list_style.scss';
import ParagraphCardComponent from './cards/paragraph_card_component';
import AddParagraphCardComponent from './cards/add_paragraph_card_component';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../../redux/actions';
import ParagraphElementTagFieldComponent from './controls/paragraph_element_tag_field_component';
import DialogComponent from '../core/dialog_components/dialog_component';

function ParagraphListComponent(props) {

    const dispatch = useDispatch();
    const paragraphsState = useSelector(state => state.modifyContent);
    const [showDialog, setShowDialog] = useState(false);
    const refs = useRef([])

    return (
        <div className='paragraph-list-root' style={{ display: props.hidden ? 'none' : null }}>
            <div className='paragraph-list-body'>
                {paragraphsState.paragraphs && paragraphsState.paragraphs.map((paragraph, idx) =>
                    <ParagraphCardComponent
                        ref={el => (refs.current[idx] = el)}
                        paragraph={paragraph}
                        key={idx}
                        onContainerClicked={() => {
                            dispatch({ type: Actions.ON_CONTAINER_CLICKED, paragraph })
                        }}
                        onContainerDeleted={() => {
                            dispatch({ type: Actions.ON_CONTAINER_DELETED, paragraph })
                        }}
                        onElementAdded={(elementItem) => {
                            dispatch({ type: Actions.ON_ELEMENT_ADDED, paragraph, elementItem })
                        }}
                        onElementDeleted={(elementItem) => {
                            dispatch({ type: Actions.ON_ELEMENT_DELETED, paragraph, elementItem })
                        }}
                        onElementClicked={(elementItem) => {
                            dispatch({ type: Actions.ON_ELEMENT_CLICKED, paragraph, elementItem })
                        }} />)}
                {paragraphsState.paragraphs && <AddParagraphCardComponent onClicked={() => {
                    setShowDialog(true);
                }} />}
            </div>
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
                        dispatch({ type: Actions.ON_CONTAINER_ADDED, tag })
                        setShowDialog(false);
                    }} />
            </DialogComponent>}
        </div>
    );
}

export default ParagraphListComponent;