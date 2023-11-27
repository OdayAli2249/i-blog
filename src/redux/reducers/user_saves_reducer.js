import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: true,
    failure: null,
};

export const userSavesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_SAVES_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                failure: null,
            };
        case Actions.GET_SAVES_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.GET_SAVES_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        default:
            return state;
    }
};