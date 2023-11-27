import { Actions } from "../actions";


export const userMiddleware = (params) => {
    return async (dispatch) => {
        dispatch({ type: Actions.GET_USER_LOADING });

        const fialureOrData = {
            result: 'success',
            response: {
                data: {
                    name: 'Oday Ali',
                    aboutMe: 'Content writer'
                }
            }
        };
        // const fialureOrData = {
        //     failure: { message: 'something went wrong', code: 400 }
        // };
        await sleep(2000);
        fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.GET_USER_SUCCESS, payload: { item: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_USER_FAILURE, payload: { failure: fialureOrData.failure } });
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

