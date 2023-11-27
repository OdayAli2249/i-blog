import { Actions } from "../actions";

export class ChannelOperations {
    static CHANGE_SUBSCRIBTION_STATUS = 'CHANGE_SUBSCRIBTION_STATUS';
    static CHANGE_JOIN_STATUS = 'CHANGE_JOIN_STATUS';
}

export const channelMiddleware = (params) => {
    return async (dispatch) => {

        if (ChannelOperations.CHANGE_SUBSCRIBTION_STATUS == params.operation)
            dispatch({ type: Actions.CHANGE_SUBSCRIBTION_STATUS_LOADING });
        else if (ChannelOperations.CHANGE_JOIN_STATUS == params.operation)
            dispatch({ type: Actions.CHANGE_JOIN_STATUS_LOADING });
        else dispatch({ type: Actions.GET_CHANNEL_LOADING });


        const fialureOrData = {
            result: 'success',
            response: {
                data: {
                    name: '++++++',
                    description: '+++++++++++++++++++',
                    userChannel: {
                        subscribtion: 'All',
                        role: null,
                        role: 'admin',
                        // join: 'None',
                        join: 'Rejected',
                    }
                }
            }
        };
        // const fialureOrData = {
        //     failure: { message: 'something went wrong', code: 400 }
        // };
        await sleep(2000);
        if (ChannelOperations.CHANGE_SUBSCRIBTION_STATUS == params.operation)
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.CHANGE_SUBSCRIBTION_STATUS_SUCCESS,
                    payload: {
                        item: fialureOrData.response.data,
                        subscribtionStatus: params.subscribtionStatus
                    }
                }) :
                dispatch({ type: Actions.CHANGE_SUBSCRIBTION_STATUS_FAILURE, payload: { failure: fialureOrData.failure } });
        else if (ChannelOperations.CHANGE_JOIN_STATUS == params.operation)
            fialureOrData.result == ProcessResult.SUCCESS ?
                dispatch({
                    type: Actions.CHANGE_JOIN_STATUS_SUCCESS,
                    payload: {
                        item: fialureOrData.response.data,
                        joinStatus: params.joinStatus
                    }
                }) :
                dispatch({ type: Actions.CHANGE_JOIN_STATUS_FAILURE, payload: { failure: fialureOrData.failure } });
        else fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.GET_CHANNEL_SUCCESS, payload: { item: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_CHANNEL_FAILURE, payload: { failure: fialureOrData.failure } });
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

