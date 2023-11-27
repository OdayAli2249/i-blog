import { Actions } from "../actions";

const initialState = {
    data: null,
    loading: true,
    failure: null,
};

export const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_JOIN_STATUS_FAILURE:
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.CHANGE_JOIN_STATUS_SUCCESS:
            state.data.item.userChannel.join = action.payload.joinStatus;
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.CHANGE_JOIN_STATUS_LOADING:
            return {
                data: state.data,
                loading: false,
                failure: null,
                joinLoading: true
            };
        case Actions.CHANGE_SUBSCRIBTION_STATUS_FAILURE:
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.CHANGE_SUBSCRIBTION_STATUS_SUCCESS:
            state.data.item.userChannel.subscribtion = action.payload.subscribtionStatus;
            return {
                data: state.data,
                loading: false,
                failure: null,
            };
        case Actions.CHANGE_SUBSCRIBTION_STATUS_LOADING:
            return {
                data: state.data,
                loading: false,
                failure: null,
                subscribtionLoading: true
            };
        case Actions.GET_CHANNEL_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                failure: null,
            };
        case Actions.GET_CHANNEL_LOADING:
            return state.data ? {
                data: state.data,
                loading: false,
                failure: null,
            } : {
                data: null,
                loading: true,
                failure: null,
            };
        case Actions.GET_CHANNEL_FAILURE:
            return {
                data: null,
                loading: false,
                failure: action.payload.failure,
            };
        default:
            return state;
    }
};