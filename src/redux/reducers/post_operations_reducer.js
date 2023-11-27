import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: false,
    failure: null,
};

export const postOperationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.POST_INTERACTION_SUCCESS:
            return {
                data: action.payload,
                success: true,
                loading: false,
                failure: null,
            };
        case Actions.POST_INTERACTION_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.POST_INTERACTION_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        case Actions.POST_INTERACTION_INITIAL:
            return initialState;
        default:
            return state;
    }
};