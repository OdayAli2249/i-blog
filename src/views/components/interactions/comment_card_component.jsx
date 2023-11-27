import React, { useState } from 'react';
import './comment_card_style.scss';
import ButtonComponent from '../core/button_component';
import { Actions } from '../../../redux/actions';
import CommentReplyFieldComponent from './comment_reply_field_component';

function CommentCardComponent(props) {

    const [hideReplies, setHideReplies] = useState(true);

    return (
        <div className='comment-root'>
            <div className='comment-row'>
                <div className='comment-column'>
                    <div className='comment-text-column'>
                        <h4 className='standard-text'>
                            {props.comment.user.name}
                        </h4>
                        <h4 className='standard-text'>
                            {props.comment.body}
                        </h4>
                        <div className='comment-reply-add-edit-row'>
                            <ButtonComponent width={'20px'} height={'20px'} onClicked={() => props.onEditCommentClicked()} />
                            <ButtonComponent width={'20px'} height={'20px'} onClicked={() => props.onDeleteCommentClicked()} />
                        </div>
                    </div>
                    <div className='comment-options-row'>
                        <ButtonComponent width={'25px'} height={'25px'}
                            onClicked={() => {
                                if (hideReplies) {
                                    props.onGetRepliesClicked();
                                    setHideReplies(false);
                                } else {
                                    setHideReplies(true);
                                }
                            }} />
                        <ButtonComponent width={'80px'} height={'25px'} />
                        <h4 className='standard-text'>
                            {'+++++'}
                        </h4>
                        {(props.comment.commentState == Actions.ADD_COMMENT_LOADING ||
                            props.comment.commentState == Actions.EDIT_COMMENT_LOADING ||
                            props.comment.commentState == Actions.DELETE_COMMENT_LOADING) &&
                            <h4 className='standard-text'>
                                {'Loading...'}
                            </h4>}
                        {props.comment.commentState == Actions.ADD_COMMENT_FAILURE &&
                            <h4 className='standard-text'>
                                {'Error'}
                            </h4>}
                    </div>
                </div>
                <div className='comment-avatar'>

                </div>
            </div>
            <div className='replies-column'>
                {!hideReplies && props.comment.repliesState == Actions.GET_REPLIES_SUCCESS &&
                    props.comment.replies.length && <CommentReplyFieldComponent
                        dialogMod={true}
                        hint={'Write a Reply...'}
                        onSend={(reply) => {
                            props.onAddReplyClicked(reply);
                        }} />}
                {!hideReplies && props.comment.repliesState == Actions.GET_REPLIES_SUCCESS &&
                    props.comment.replies.length &&
                    props.comment.replies.map(((reply, idx) =>
                        <div key={idx} className='reply-row'>
                            <div className='reply-column'>
                                <div className='reply-text-column'>
                                    <h4 className='standard-text'>
                                        {reply.user.name}
                                    </h4>
                                    <h4 className='standard-text'>
                                        {reply.body}
                                    </h4>
                                    <div className='comment-reply-add-edit-row'>
                                        <ButtonComponent width={'20px'} height={'20px'}
                                            onClicked={() => props.onEditReplyClicked(props.comment.replies[idx])} />
                                        <ButtonComponent width={'20px'} height={'20px'}
                                            onClicked={() => props.onDeleteReplyClicked(props.comment.replies[idx])} />
                                    </div>
                                </div>
                                <div className='reply-options-row'>
                                    <ButtonComponent width={'25px'} height={'25px'} />
                                    <ButtonComponent width={'80px'} height={'25px'} />
                                    <h4 className='standard-text'>
                                        {'+++++'}
                                    </h4>
                                    {(props.comment.replies[idx].replyState == Actions.ADD_REPLY_LOADING ||
                                        props.comment.replies[idx].replyState == Actions.EDIT_REPLY_LOADING ||
                                        props.comment.replies[idx].replyState == Actions.DELETE_REPLY_LOADING) &&
                                        <h4 className='standard-text'>
                                            {'Loading...'}
                                        </h4>}
                                    {props.comment.replies[idx].replyState == Actions.ADD_REPLY_FAILURE &&
                                        <h4 className='standard-text'>
                                            {'Error'}
                                        </h4>}
                                </div>
                            </div>
                            <div className='reply-avatar'>

                            </div>
                        </div>
                    ))}
                {!hideReplies &&
                    props.comment.repliesState == Actions.GET_REPLIES_SUCCESS &&
                    props.comment.replies.length == 0 &&
                    <h4 className='standard-text'>No data</h4>}
                {!hideReplies &&
                    props.comment.repliesState == Actions.GET_REPLIES_FAILURE &&
                    <h4 className='standard-text'>Error</h4>}
                {!hideReplies &&
                    props.comment.repliesState == Actions.GET_REPLIES_LOADING &&
                    <h4 className='standard-text'>Loading..</h4>}
            </div>
        </div>
    );
}

export default CommentCardComponent;