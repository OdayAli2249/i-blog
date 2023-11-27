import { Actions, Operations } from "../actions";

export class CommentOperations {
    static GET_REPLIES = 'GET_REPLIES';
    static ADD_COMMENT = 'ADD_COMMENT';
    static EDIT_COMMENT = 'EDIT_COMMENT';
    static DELETE_COMMENT = 'DELETE_COMMENT';
    static ADD_REPLY = 'ADD_REPLY ';
    static EDIT_REPLY = 'EDIT_REPLY ';
    static DELETE_REPLY = 'DELETE_REPLY ';
}

export const commentsMiddleware = (params) => {
    return async (dispatch) => {
        if (params.operation == CommentOperations.DELETE_REPLY)
            dispatch({
                type: Actions.DELETE_REPLY_LOADING, payload:
                    { commentId: params.commentId, replyId: params.replyId }
            });
        else if (params.operation == CommentOperations.EDIT_REPLY)
            dispatch({
                type: Actions.EDIT_REPLY_LOADING, payload:
                    { commentId: params.commentId, replyId: params.reply.id }
            });
        else if (params.operation == CommentOperations.ADD_REPLY)
            dispatch({
                type: Actions.ADD_REPLY_LOADING, payload:
                {
                    body: params.reply, commentId: params.commentId, id: -1,
                    user: { name: 'Oday Ali' }, replyState: Actions.ADD_REPLY_LOADING
                }
            });
        else if (params.operation == CommentOperations.DELETE_COMMENT)
            dispatch({
                type: Actions.DELETE_COMMENT_LOADING, payload:
                    { commentId: params.commentId }
            });
        else if (params.operation == CommentOperations.EDIT_COMMENT)
            dispatch({
                type: Actions.EDIT_COMMENT_LOADING, payload:
                    { commentId: params.comment.id }
            });
        else if (params.operation == CommentOperations.ADD_COMMENT)
            dispatch({
                // -1 (under processing add id) is number used for Id that is under processing now
                // in reducer, replace any found comment with under processing Id with this comment
                type: Actions.ADD_COMMENT_LOADING, payload:
                    { body: params.comment, id: -1, user: { name: 'Oday Ali' }, commentState: Actions.ADD_COMMENT_LOADING }
            });
        else if (params.operation == CommentOperations.GET_REPLIES)
            dispatch({
                type: Actions.GET_REPLIES_LOADING, payload: { commentId: params.commentId }
            });
        else
            dispatch({ type: Actions.GET_COMMENTS_LOADING });






        let fialureOrData;
        if (params.operation == CommentOperations.DELETE_REPLY) {
            // fialureOrData = {
            //     result: 'success',
            // };
            fialureOrData = {
                failure: { message: 'something went wrong', code: 400 }
            };
        }
        else if (params.operation == CommentOperations.EDIT_REPLY) {
            // fialureOrData = {
            //     result: 'success',
            // };
            fialureOrData = {
                failure: { message: 'something went wrong', code: 400 }
            };
        }
        else if (params.operation == CommentOperations.ADD_REPLY) {
            fialureOrData = {
                result: 'success',
                response: {
                    id: 54321
                }
            };
            // fialureOrData = {
            //     failure: { message: 'something went wrong', code: 400 }
            // };
        }
        else if (params.operation == CommentOperations.DELETE_COMMENT) {
            // fialureOrData = {
            //     result: 'success',
            // };
            fialureOrData = {
                failure: { message: 'something went wrong', code: 400 }
            };
        }
        else if (params.operation == CommentOperations.EDIT_COMMENT) {
            // fialureOrData = {
            //     result: 'success',
            // };
            fialureOrData = {
                failure: { message: 'something went wrong', code: 400 }
            };
        }
        else if (params.operation == CommentOperations.ADD_COMMENT) {
            // fialureOrData = {
            //     result: 'success',
            //     response: {
            //         id: 12345
            //     }
            // };
            fialureOrData = {
                failure: { message: 'something went wrong', code: 400 }
            };
        } else if (params.operation == CommentOperations.GET_REPLIES) {
            fialureOrData = {
                result: 'success',
                response: {
                    data: replies1
                }
            };
            // fialureOrData = {
            //     failure: { message: 'something went wrong', code: 400 }
            // };
        } else {
            fialureOrData = {
                result: 'success',
                response: {
                    data: comments.slice(params.offset, params.offset + params.limit)
                }
            };
            // const fialureOrData = {
            //     failure: { message: 'something went wrong', code: 400 }
            // };
        }





        await sleep(2000);
        if (params.operation == CommentOperations.DELETE_REPLY) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.DELETE_REPLY_SUCCESS, payload:
                        { commentId: params.commentId, replyId: params.replyId }
                }) :
                dispatch({
                    type: Actions.DELETE_REPLY_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: params.commentId, replyId: params.replyId }
                });
        }
        else if (params.operation == CommentOperations.EDIT_REPLY) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.EDIT_REPLY_SUCCESS, payload:
                        { commentId: params.commentId, reply: params.reply }
                }) :
                dispatch({
                    type: Actions.EDIT_REPLY_FAILURE, payload:
                        { failure: fialureOrData.failure, replyId: params.reply.id, commentId: params.commentId }
                });
        }
        else if (params.operation == CommentOperations.ADD_REPLY) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.ADD_REPLY_SUCCESS, payload:
                        // the real Id, we should replace the under processing id with this Id
                        { commentId: params.commentId, replyId: fialureOrData.response.id }
                }) :
                dispatch({
                    type: Actions.ADD_REPLY_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: params.commentId, replyId: -1 }
                    // the under processing Id
                });
        }
        else if (params.operation == CommentOperations.DELETE_COMMENT) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.DELETE_COMMENT_SUCCESS, payload:
                        { commentId: params.commentId }
                }) :
                dispatch({
                    type: Actions.EDIT_COMMENT_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: params.commentId }
                });
        } else if (params.operation == CommentOperations.EDIT_COMMENT) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.EDIT_COMMENT_SUCCESS, payload:
                        { comment: params.comment }
                }) :
                dispatch({
                    type: Actions.EDIT_COMMENT_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: params.comment.id }
                });
        } else if (params.operation == CommentOperations.ADD_COMMENT) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.ADD_COMMENT_SUCCESS, payload:
                        // the real Id, we should replace the under processing id with this Id
                        { commentId: fialureOrData.response.id }
                }) :
                dispatch({
                    type: Actions.ADD_COMMENT_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: -1 }   // the under processing Id
                });
        } else if (params.operation == CommentOperations.GET_REPLIES) {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.GET_REPLIES_SUCCESS, payload:
                        { items: fialureOrData.response.data, commentId: params.commentId }
                }) :
                dispatch({
                    type: Actions.GET_REPLIES_FAILURE, payload:
                        { failure: fialureOrData.failure, commentId: params.commentId }
                });
        } else {
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({ type: Actions.GET_COMMENTS_SUCCESS, payload: { items: fialureOrData.response.data } }) :
                dispatch({ type: Actions.GET_COMMENTS_FAILURE, payload: { failure: fialureOrData.failure } });
        }

        if (fialureOrData.failure && fialureOrData.failure.code == 401)
            dispatch({ type: Actions.UNAUTHORIZED_FAILURE, payload: { failure: '1', type: 0 } });
    };
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ProcessResult {
    static SUCCESS = 'success';
    static FAILURE = 'failure';
}

const comments = [
    {
        id: 1,
        user: { name: 'user1' },
        body: 'comment 1'
    },
    {
        id: 2,
        user: { name: 'user2' },
        body: 'comment 2'
    },
    {
        id: 3,
        user: { name: 'user3' },
        body: 'comment 3'
    },
    {
        id: 4,
        user: { name: 'user4' },
        body: 'comment 4'
    },
    {
        id: 5,
        user: { name: 'user5' },
        body: 'comment 5'
    },
    {
        id: 6,
        user: { name: 'user6' },
        body: 'comment 6'
    },
    {
        id: 7,
        user: { name: 'user7' },
        body: 'comment 7'
    },
    {
        id: 8,
        user: { name: 'user8' },
        body: 'comment 8'
    },
    {
        id: 9,
        user: { name: 'user9' },
        body: 'comment 9'
    },
    {
        id: 10,
        user: { name: 'user10' },
        body: 'comment 10'
    },
    {
        id: 11,
        user: { name: 'user11' },
        body: 'comment 11'
    },
    {
        id: 12,
        user: { name: 'user12' },
        body: 'comment 12'
    },
]

const replies1 = [
    {
        id: 1,
        user: { name: 'user1' },
        body: 'reply 1'
    },
    {
        id: 2,
        user: { name: 'user2' },
        body: 'reply 2'
    },
    {
        id: 3,
        user: { name: 'user3' },
        body: 'reply 3'
    },
    {
        id: 4,
        user: { name: 'user4' },
        body: 'reply 4'
    },
    {
        id: 5,
        user: { name: 'user5' },
        body: 'reply 5'
    },
    {
        id: 6,
        user: { name: 'user6' },
        body: 'reply 6'
    }
]

const replies2 = [
    {
        id: 7,
        user: { name: 'user7' },
        body: 'reply 7'
    },
    {
        id: 8,
        user: { name: 'user8' },
        body: 'reply 8'
    },
    {
        id: 9,
        user: { name: 'user9' },
        body: 'reply 9'
    },
    {
        id: 10,
        user: { name: 'user10' },
        body: 'reply 10'
    },
    {
        id: 11,
        user: { name: 'user11' },
        body: 'reply 11'
    },
    {
        id: 12,
        user: { name: 'user12' },
        body: 'reply 12'
    },
]

