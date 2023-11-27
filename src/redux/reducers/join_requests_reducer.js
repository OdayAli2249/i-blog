import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: true,
    failure: null,
};

export const joinRequestsReducer = (state = initialState, action) => {
    // you can easly handle the rest actions in middleware for more spesific state parts handling
    switch (action.type) {
        case Actions.GET_JOIN_REQUESTS_SUCCESS_UPDATE:
            state.data.items.map((item => {
                if (item.id == action.payload.joinRequestId)
                    item.status = action.payload.status;
            }))
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.GET_JOIN_REQUESTS_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                failure: null,
            };
        case Actions.GET_JOIN_REQUESTS_LOADING:
            return {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.GET_JOIN_REQUESTS_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        default:
            return state;
    }
};