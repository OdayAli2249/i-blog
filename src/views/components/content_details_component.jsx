import React, { useEffect, useState } from 'react';
import './content_details_style.scss';
import InteractionSectionComponent from './interaction_section_component';
import PaginationComponent from './core/pagination_components/pagination_component';
import CommentCardComponent from './interactions/comment_card_component';
import { CommentOperations, commentsMiddleware } from '../../redux/middlewares/comments_middleware';
import { useDispatch, useSelector } from 'react-redux';
import CommentReplyFieldComponent from './interactions/comment_reply_field_component';
import DialogComponent from './core/dialog_components/dialog_component';
import ConfirmActionComponent from './core/confirm_action_component';
import EditCommentReplyComponent from './interactions/edit_comment_reply_component';
import { postOperationsMiddleware, initialState } from '../../redux/middlewares/post_operations_middleware';

function ContentDetailsComponent(props) {


    const initialCommentsState = {
        removeComment: { show: false, commentId: null },
        editComment: { show: false, comment: null },
        // in edit and delete reply, comment Id is not needed for api call, it is needed just by reducer
        removeReply: { show: false, replyId: null, commentId: null },
        editReply: { show: false, reply: null, commentId: null },
    }

    const commentsState = useSelector(state => state.comments);
    const contentOperationsState = useSelector(props.contentSource);   // to do: abstract this param


    const dispatch = useDispatch();

    const [showDialog, setShowDialog] = useState(initialCommentsState);
    const [interactionsState, setInteractionsState] = useState(props.content.userContent ?
        { interactions: props.content.userContent } : { interactions: { favorite: false, save: false, share: false } });

    useEffect(() => {
        if (contentOperationsState.success) {
            if (contentOperationsState.data.interaction == 'favorite')
                setInteractionsState({
                    interactions:
                    {
                        ...interactionsState.interactions,
                        favorite: contentOperationsState.data.isActive
                    }, type: 'success'
                });
            else if (contentOperationsState.data.interaction == 'save')
                setInteractionsState({
                    interactions:
                    {
                        ...interactionsState.interactions,
                        save: contentOperationsState.data.isActive
                    }, type: 'success'
                });
            else if (contentOperationsState.data.interaction == 'share')
                setInteractionsState({
                    interactions:
                    {
                        ...interactionsState.interactions,
                        share: contentOperationsState.data.isActive
                    }, type: 'success'
                });
            dispatch(initialState());
        } else if (contentOperationsState.failure) {
            setInteractionsState({
                interactions:
                    { ...interactionsState.interactions }, type: 'failure'
            });
            dispatch(initialState());
        }
    }, [contentOperationsState])

    return (
        <div className='content-details-root'>
            <div className='content-details-interactions-column'>
                {!props.hideOptions && <div className={interactionsState.interactions.favorite ? 'active-content-details-interaction' :
                    'content-details-interaction'}
                    onClick={() => {
                        dispatch(postOperationsMiddleware({
                            interaction: 'favorite',
                            contentId: props.content.id,
                            isActive: interactionsState.interactions.favorite
                        }))
                    }}>
                </div>}
                {!props.hideOptions && <div className={interactionsState.interactions.save ? 'active-content-details-interaction' :
                    'content-details-interaction'}
                    onClick={() => {
                        dispatch(postOperationsMiddleware({
                            interaction: 'save',
                            contentId: props.content.id,
                            isActive: interactionsState.interactions.save
                        }))
                    }}>
                </div>}
                {!props.hideOptions && <div className={interactionsState.interactions.share ? 'active-content-details-interaction' :
                    'content-details-interaction'}
                    onClick={() => {
                        dispatch(postOperationsMiddleware({
                            interaction: 'share',
                            contentId: props.content.id,
                            isActive: interactionsState.interactions.share
                        }))
                    }}>
                </div>}
                <div className='content-details-interaction'
                    onClick={() => {
                    }}>

                </div>
                <div className='content-details-interaction'
                    onClick={() => {
                        // comments: this to take as to comments section
                    }}>

                </div>
            </div>
            <div className='content-details-column'>
                <div className='content-details-header'>

                </div>
                <div className='content-details-body'>

                </div>
                <div className='content-details-interaction-row'>
                    <InteractionSectionComponent interactions={interactionsState.interactions} />
                </div>
                <div className='content-details-comments-container'>
                    <PaginationComponent
                        initialView={{
                            grid: false,
                            list: true
                        }}
                        pageSize={8}                     // when start fetching data from I/O
                        gridCardSize={'larg'}
                        height='auto'                       // contatnt or auto
                        width={'100%'}
                        showView={false}
                        showPages={true}
                        fetchParams={{ contentId: props.contentId }}
                        fetchData={commentsMiddleware}
                        selectedState={state => state.comments}
                        itemBuilder={(ID, comment, _) =>
                            <CommentCardComponent
                                onGetRepliesClicked={() => {
                                    dispatch(commentsMiddleware(
                                        {
                                            operation: CommentOperations.GET_REPLIES,
                                            commentId: comment.id
                                        }
                                    ))
                                }}
                                onEditCommentClicked={() => {
                                    setShowDialog({ ...showDialog, editComment: { show: true, comment: comment } })
                                }}
                                onDeleteCommentClicked={() => {
                                    setShowDialog({ ...showDialog, removeComment: { show: true, commentId: comment.id } })
                                }}
                                onEditReplyClicked={(reply) => {
                                    setShowDialog({ ...showDialog, editReply: { show: true, commentId: comment.id, reply: reply } })
                                }}
                                onDeleteReplyClicked={(reply) => {
                                    setShowDialog({ ...showDialog, removeReply: { show: true, commentId: comment.id, replyId: reply.id } })
                                }}
                                onAddReplyClicked={(reply) => {
                                    dispatch(commentsMiddleware(
                                        {
                                            operation: CommentOperations.ADD_REPLY,
                                            commentId: comment.id,
                                            reply: reply
                                        }
                                    ))
                                }}
                                key={ID}
                                comment={comment}
                            />}
                    />
                </div>
                <div className='content-details-comment-place-holder'>

                </div>
                <CommentReplyFieldComponent onSend={(comment) => {
                    dispatch(commentsMiddleware(
                        {
                            operation: CommentOperations.ADD_COMMENT,
                            comment: comment
                        }
                    ))
                }} />
                {commentsState.commentState && <div className='comment-state-snack-bar'>{commentsState.commentState}</div>}
            </div>
            {showDialog.editComment.show && <DialogComponent
                show={showDialog.editComment.show}
                height='40'
                width='60'
                onClose={() => {
                    setShowDialog({ ...showDialog, editComment: { show: false, comment: null } })
                }}>
                <EditCommentReplyComponent comment={showDialog.editComment.comment} onSend={(comment) => {
                    dispatch(commentsMiddleware(
                        {
                            operation: CommentOperations.EDIT_COMMENT,
                            comment: { ...showDialog.editComment.comment, body: comment }
                        }
                    ))
                    setShowDialog({ ...showDialog, editComment: { show: false, comment: null } });
                }} />
            </DialogComponent>}
            {showDialog.removeComment.show && <DialogComponent
                show={showDialog.removeComment.show}
                height='40'
                width='60'
                onClose={() => {
                    setShowDialog({ ...showDialog, removeComment: { show: false, commentId: null } })
                }}>
                <ConfirmActionComponent
                    text={'++++++ +++ +++++++ ++++ ++ ++++++?'}
                    positiveAction={'Confirm'}
                    negativeAction={'Cancel'}
                    onNegativeAction={() => setShowDialog({ ...showDialog, removeComment: { show: false, commentId: null, replyId: null } })}
                    onPositiveAction={() => {
                        dispatch(commentsMiddleware(
                            {
                                operation: CommentOperations.DELETE_COMMENT,
                                commentId: showDialog.removeComment.commentId
                            }
                        ))
                        setShowDialog({ ...showDialog, removeComment: { show: false, commentId: null } });
                    }} />
            </DialogComponent>}
            {showDialog.editReply.show && <DialogComponent
                show={showDialog.editReply.show}
                height='40'
                width='60'
                onClose={() => {
                    setShowDialog({ ...showDialog, editReply: { show: false, commentId: null, reply: null } })
                }}>
                <EditCommentReplyComponent comment={showDialog.editReply.reply}
                    hint={'Write a Reply...'}
                    onSend={(reply) => {
                        dispatch(commentsMiddleware(
                            {
                                operation: CommentOperations.EDIT_REPLY,
                                reply: { ...showDialog.editReply.reply, body: reply },
                                commentId: showDialog.editReply.commentId
                            }
                        ))
                        setShowDialog({ ...showDialog, editReply: { show: false, commentId: null, reply: null } });
                    }} />
            </DialogComponent>}
            {showDialog.removeReply.show && <DialogComponent
                show={showDialog.removeReply.show}
                height='40'
                width='60'
                onClose={() => {
                    setShowDialog({ ...showDialog, removeReply: { show: false, replyId: null, commentId: null } })
                }}>
                <ConfirmActionComponent
                    text={'++++++ +++ +++++++ ++++ ++ ++++++?'}
                    positiveAction={'Confirm'}
                    negativeAction={'Cancel'}
                    onNegativeAction={() => setShowDialog({ ...showDialog, removeReply: { show: false, commentId: null } })}
                    onPositiveAction={() => {
                        dispatch(commentsMiddleware(
                            {
                                operation: CommentOperations.DELETE_REPLY,
                                commentId: showDialog.removeReply.commentId,
                                replyId: showDialog.removeReply.replyId
                            }
                        ))
                        setShowDialog({ ...showDialog, removeReply: { show: false, commentId: null, replyId: null } });
                    }} />
            </DialogComponent>}
        </div>
    );
}

export default ContentDetailsComponent;