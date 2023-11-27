import React from 'react';
import './edit_comment_reply_style.scss';
import CommentReplyFieldComponent from './comment_reply_field_component';

function EditCommentReplyComponent(props) {
    return (
        <div className='edit-comment-reply-root'>
            <CommentReplyFieldComponent onSend={(comment) => props.onSend(comment)}
                dialogMod={true} initailValue={props.comment.body}
                hint={props.hint} />
        </div>
    );
}

export default EditCommentReplyComponent;