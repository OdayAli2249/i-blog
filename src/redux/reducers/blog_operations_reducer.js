import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: false,
    failure: null,
};

export const blogOperationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADVERT_INTERACTION_SUCCESS:
            return {
                success: true,
                loading: false,
                failure: null,
            };
        case Actions.ADVERT_INTERACTION_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.ADVERT_INTERACTION_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        case Actions.ADVERT_INTERACTION_INITIAL:
            return initialState;
        default:
            return state;
    }
};