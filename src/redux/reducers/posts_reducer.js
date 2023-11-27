import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: true,
    failure: null,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_POSTS_SUCCESS_UPDATE:
            state.data.items.map(item => {
                if (item.id == action.payload.contentId) {
                    if (!item.userContent) item.userContent = {};
                    action.payload.interaction == 'favorite' ? item.userContent.favorite = action.payload.isActive :
                        action.payload.interaction == 'save' ? item.userContent.save = action.payload.isActive :
                            item.userContent.share = action.payload.isActive;
                }
            })
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.GET_POSTS_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                failure: null,
            };
        case Actions.GET_POSTS_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.GET_POSTS_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        default:
            return state;
    }
};