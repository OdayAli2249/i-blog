import { Actions } from "../actions";


export const modifyContentMiddleware = (params) => {
    return async (dispatch) => {
        const canStageContent = true;
        canStageContent ?
            dispatch({ type: Actions.STAGE_CONTENT_COMPLETED, content: params.content }) :
            dispatch({ type: Actions.STAGE_CONTENT_FAILURE, message: '' });
    };
};