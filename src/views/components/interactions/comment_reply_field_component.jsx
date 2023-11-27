import React, { useEffect, useRef, useState } from 'react';
import './comment_reply_field_style.scss';
import ButtonComponent from '../core/button_component';
import TextFieldControlComponent from '../core/input_components/controls/text_field_control_component';

function CommentReplyFieldComponent(props) {

    const [comment, setComment] = useState('');
    const textFieldRef = useRef(null);

    return (
        <div className={props.dialogMod ? 'comment-reply-field-dialog-root' : 'comment-reply-field-root'}>
            <div className='comment-reply-field-body'>
                <TextFieldControlComponent
                    ref={textFieldRef}
                    initialValue={props.initailValue}
                    hint={props.hint ? props.hint : 'Write a comment...'}
                    onChange={(value) => {
                        setComment(value)
                    }}
                />
            </div>
            <div className='comment-reply-field-row'>
                <ButtonComponent width={'50px'} height={'50px'} onClicked={() => {
                    props.onSend(comment)
                    textFieldRef.current.clear();
                }} />
                <div className='comment-reply-field-options'>
                    <ButtonComponent width={'50px'} height={'50px'} />
                    <ButtonComponent width={'50px'} height={'50px'} />
                </div>
            </div>
        </div>
    );
}

export default CommentReplyFieldComponent;