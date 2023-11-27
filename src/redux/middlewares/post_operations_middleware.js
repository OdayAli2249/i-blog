import { Actions } from "../actions";


export const postOperationsMiddleware = (params) => {
    return async (dispatch) => {
        dispatch({ type: Actions.POST_INTERACTION_LOADING, interaction: params.interaction, isActive: params.isActive });

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
        if (fialureOrData.result == ProcessResult.SUCCESS) {
            dispatch({ type: Actions.POST_INTERACTION_SUCCESS, payload: { interaction: params.interaction, isActive: !params.isActive } })
            dispatch({
                type: Actions.GET_POSTS_SUCCESS_UPDATE, payload:
                    { interaction: params.interaction, isActive: !params.isActive, contentId: params.contentId }
            })
        } else dispatch({ type: Actions.POST_INTERACTION_FAILURE, payload: { failure: fialureOrData.failure } });
        if (fialureOrData.failure && fialureOrData.failure.code == 401)
            dispatch({ type: Actions.UNAUTHORIZED_FAILURE, payload: { failure: '1', type: 0 } });
    };
};

export const initialState = () => {
    return async (dispatch) => {
        dispatch({ type: Actions.POST_INTERACTION_INITIAL })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ProcessResult {
    static SUCCESS = 'success';
    static FAILURE = 'failure';
}