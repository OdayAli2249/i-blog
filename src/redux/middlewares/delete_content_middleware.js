import { Actions } from "../actions";


export const deleteContentMiddleware = (params) => {
    return async (dispatch) => {
        // console.log(params);
        dispatch({ type: Actions.DELETE_CONTENT_LOADING });

        const fialureOrData = {
            result: 'success',
            response: {
                data: ''
            }
        };
        // const fialureOrData = {
        //     failure: { message: 'something went wrong', code: 400 }
        // };
        await sleep(2000);
        fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.DELETE_CONTENT_SUCCESS }) :
            dispatch({ type: Actions.DELETE_CONTENT_FAILURE, payload: { failure: fialureOrData.failure } });
        if (fialureOrData.failure && fialureOrData.failure.code == 401)
            dispatch({ type: Actions.UNAUTHORIZED_FAILURE, payload: { failure: '1', type: 0 } });
    };
};

export const initialState = () => {
    return async (dispatch) => {
        dispatch({ type: Actions.DELETE_CONTENT_INITIAL })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ProcessResult {
    static SUCCESS = 'success';
    static FAILURE = 'failure';
}