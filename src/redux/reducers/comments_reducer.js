import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: true,
    failure: null,
};

export const commentReducer = (state = initialState, action) => {
    let items;
    switch (action.type) {

        case Actions.DELETE_REPLY_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == action.payload.replyId)
                            reply.replyState = Actions.DELETE_REPLY_FAILURE;
                    })
            })
            return {
                ...state, commentState: Actions.DELETE_REPLY_FAILURE
            };
        case Actions.DELETE_REPLY_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies = item.replies.filter((reply) => reply.id != action.payload.replyId)
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
                commentState: Actions.DELETE_REPLY_SUCCESS
            };
        case Actions.DELETE_REPLY_LOADING:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == action.payload.replyId)
                            reply.replyState = Actions.DELETE_REPLY_LOADING;
                    })
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };


        case Actions.EDIT_REPLY_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == action.payload.replyId)
                            reply.replyState = Actions.EDIT_REPLY_SUCCESS;
                    })
            })
            return {
                ...state, commentState: Actions.EDIT_REPLY_FAILURE
            };
        case Actions.EDIT_REPLY_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == action.payload.reply.id) {
                            reply.replyState = Actions.EDIT_REPLY_SUCCESS;
                            reply.body = action.payload.reply.body;
                        }
                    })
            })
            return {
                ...state, commentState: Actions.EDIT_REPLY_SUCCESS
            };
        case Actions.EDIT_REPLY_LOADING:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == action.payload.replyId)
                            reply.replyState = Actions.EDIT_REPLY_LOADING;
                    })
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };



        case Actions.ADD_REPLY_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == -1) {
                            reply.replyState = Actions.ADD_REPLY_FAILURE;
                        }
                    })
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.ADD_REPLY_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.replies.map(reply => {
                        if (reply.id == -1) {
                            reply.replyState = Actions.ADD_REPLY_SUCCESS;
                            reply.id = action.payload.replyId;
                        }
                    })
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.ADD_REPLY_LOADING:
            // remove every comment with under processing Id, and add the one in the action's payload.
            let replies = state.data.items.filter(item => item.id == action.payload.commentId)[0].replies;
            items = replies && replies.length > 0 ? replies.filter(item => item.id != -1) : [];
            items.unshift(action.payload);
            state.data.items.map(item => { if (item.id == action.payload.commentId) item.replies = items; });
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };

        case Actions.GET_COMMENTS_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                failure: null,
            };
        case Actions.GET_COMMENTS_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.GET_COMMENTS_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };


        case Actions.DELETE_COMMENT_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.commentState = Actions.DELETE_COMMENT_FAILURE;
            })
            return {
                ...state, commentState: Actions.DELETE_COMMENT_FAILURE
            };
        case Actions.DELETE_COMMENT_SUCCESS:
            items = state.data.items.filter((item) => item.id != action.payload.commentId);
            return {
                data: { items: items },
                loading: false,
                failure: null,
                commentState: Actions.DELETE_COMMENT_SUCCESS
            };
        case Actions.DELETE_COMMENT_LOADING:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.commentState = Actions.DELETE_COMMENT_LOADING;
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.EDIT_COMMENT_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.commentState = Actions.EDIT_COMMENT_FAILURE;
            })
            return {
                ...state, commentState: Actions.EDIT_COMMENT_FAILURE
            };
        case Actions.EDIT_COMMENT_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == action.payload.comment.id) {
                    item.body = action.payload.comment.body;
                    item.commentState = Actions.EDIT_COMMENT_SUCCESS;
                }
            })
            return {
                ...state, commentState: Actions.EDIT_COMMENT_SUCCESS
            };
        case Actions.EDIT_COMMENT_LOADING:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.commentState = Actions.EDIT_COMMENT_LOADING;
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.ADD_COMMENT_FAILURE:
            state.data.items.map((item) => {
                if (item.id == -1) {
                    item.commentState = Actions.ADD_COMMENT_FAILURE
                }
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.ADD_COMMENT_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == -1) {
                    item.commentState = Actions.ADD_COMMENT_SUCCESS
                    item.id = action.payload.commentId;
                }
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.ADD_COMMENT_LOADING:
            // remove every comment with under processing Id, and add the one in the action's payload.
            items = state.data.items && state.data.items.length > 0 ? state.data.items.filter(item => item.id != -1) : [];
            items.unshift(action.payload);
            return {
                data: { items: items },
                loading: false,
                failure: null,
            };
        case Actions.GET_REPLIES_SUCCESS:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId) {
                    item.repliesState = Actions.GET_REPLIES_SUCCESS
                    item.replies = action.payload.items;
                }
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.GET_REPLIES_LOADING:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.repliesState = Actions.GET_REPLIES_LOADING
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        case Actions.GET_REPLIES_FAILURE:
            state.data.items.map((item) => {
                if (item.id == action.payload.commentId)
                    item.repliesState = Actions.GET_REPLIES_FAILURE
            })
            return {
                data: { items: state.data.items },
                loading: false,
                failure: null,
            };
        default:
            return state;
    }
};