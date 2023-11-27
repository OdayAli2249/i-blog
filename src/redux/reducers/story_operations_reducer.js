import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: false,
    failure: null,
};

export const storyOperationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.STORY_INTERACTION_SUCCESS:
            return {
                success: true,
                loading: false,
                failure: null,
            };
        case Actions.STORY_INTERACTION_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.STORY_INTERACTION_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        case Actions.STORY_INTERACTION_INITIAL:
            return initialState;
        default:
            return state;
    }
};