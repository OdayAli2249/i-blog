import { Actions } from "../actions";


export const advertsMiddleware = (params) => {
    return async (dispatch) => {
        dispatch({ type: Actions.GET_ADVERTS_LOADING });

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
            dispatch({ type: Actions.GET_ADVERTS_SUCCESS, payload: { items: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_ADVERTS_FAILURE, payload: { failure: fialureOrData.failure } });
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
        name: 'advert1',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 2,
        name: 'advert2',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 3,
        name: 'advert3',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 4,
        name: 'advert4',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 5,
        name: 'advert5',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 6,
        name: 'advert6'
    },
    {
        id: 7,
        name: 'advert7'
    },
    {
        id: 8,
        name: 'advert8',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    }
]

