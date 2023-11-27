import { Actions } from "../actions";


export const userFavoritesMiddleware = (params) => {
    return async (dispatch) => {
        dispatch({ type: Actions.GET_FAVORITES_LOADING });

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
        fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.GET_FAVORITES_SUCCESS, payload: { items: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_FAVORITES_FAILURE, payload: { failure: fialureOrData.failure } });
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
        id: 0,
        content: {
            id: 4,
            name: 'story4',
        }
    },
    {
        id: 1,
        content: {
            id: 4,
            name: 'event1',
        }
    },
    {
        id: 2,
        content: {
            id: 6,
            name: 'post6',
        }
    },
    {
        id: 3,
        content: {
            id: 3,
            name: 'post3',
        }
    },
    {
        id: 4,
        content: {
            id: 2,
            name: 'post2',
        }
    },
    {
        id: 5,
        content: {
            id: 1,
            name: 'story1',
        }
    },
    {
        id: 6,
        content: {
            id: 7,
            name: 'blog1',
        }
    },
    {
        id: 7,
        content: {
            id: 5,
            name: 'post5',
        }
    },
    {
        id: 8,
        content: {
            id: 1,
            name: 'blog1',
        }
    },
]

