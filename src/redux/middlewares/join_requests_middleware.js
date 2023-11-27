import { Actions } from "../actions";

export class JoinRequestOperations {
    static IGNORE = 'IGNORE';
    static CONFIRM = 'CONFIRM';
}

export const joinRequestsMiddleware = (params) => {
    return async (dispatch) => {
        if (params.operation == JoinRequestOperations.CONFIRM)
            dispatch({
                type: Actions.GET_JOIN_REQUESTS_CONFIRM_LOADING,
                joinRequestId: params.joinRequestId
            });
        else if (params.operation == JoinRequestOperations.IGNORE)
            dispatch({
                type: Actions.GET_JOIN_REQUESTS_IGNORE_LOADING,
                joinRequestId: params.joinRequestId
            });
        else dispatch({ type: Actions.GET_JOIN_REQUESTS_LOADING });

        const fialureOrData = {
            result: 'success',
            response: {
                data: posts.slice(params.offset, params.offset + params.limit)
            }
        };
        // const fialureOrData = {
        //     failure: { message: 'something went wrong', code: 400 }
        // };
        await sleep(2000);

        if (params.operation == JoinRequestOperations.CONFIRM) {
            if (fialureOrData.result == ProcessResult.SUCCESS)
                dispatch({
                    type: Actions.GET_JOIN_REQUESTS_SUCCESS_UPDATE,
                    payload: {
                        items: fialureOrData.response.data,
                        status: 'Accepted', joinRequestId: params.joinRequestId
                    }
                })
        }
        else if (params.operation == JoinRequestOperations.IGNORE) {
            if (fialureOrData.result == ProcessResult.SUCCESS)
                dispatch({
                    type: Actions.GET_JOIN_REQUESTS_SUCCESS_UPDATE,
                    payload: {
                        items: fialureOrData.response.data,
                        status: 'Rejected', joinRequestId: params.joinRequestId
                    }
                })
        }
        else fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.GET_JOIN_REQUESTS_SUCCESS, payload: { items: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_JOIN_REQUESTS_FAILURE, payload: { failure: fialureOrData.failure } });

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

const posts = [
    {
        id: 1,
        name: 'join request1',
        status: 'pending'
    },
    {
        id: 2,
        name: 'join request2',
        status: 'pending'
    },
    {
        id: 3,
        name: 'join request3',
        status: 'pending'
    },
    {
        id: 4,
        name: 'join request4',
        status: 'pending'
    },
    {
        id: 5,
        name: 'join request5',
        status: 'pending'
    },
    {
        id: 6,
        name: 'join request6',
        status: 'pending'
    },
    {
        id: 7,
        name: 'join request7',
        status: 'pending'
    },
    {
        id: 8,
        name: 'join request8',
        status: 'pending'
    },

    {
        id: 9,
        name: 'join request9',
        status: 'pending'
    }
]

