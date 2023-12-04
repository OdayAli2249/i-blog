import { Actions } from "../actions";


export const postsMiddleware = (params) => {
    return async (dispatch) => {
        dispatch({ type: Actions.GET_POSTS_LOADING });

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
            dispatch({ type: Actions.GET_POSTS_SUCCESS, payload: { items: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_POSTS_FAILURE, payload: { failure: fialureOrData.failure } });
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
        name: 'post1',
        content: {
            paragraphs: [
                {
                    container: { name: 'container1', selected: false },
                    elements: [
                        { name: 'text1', selected: false },
                        { name: 'text2', selected: false },
                        { name: 'image1', selected: false },
                        { name: 'image2', selected: false },
                        { name: 'image3', selected: false }
                    ]
                },
                {
                    container: { name: 'container2', selected: false },
                    elements: [
                        { name: 'text1', selected: false },
                        { name: 'text2', selected: false },
                        { name: 'image1', selected: false },
                        { name: 'image2', selected: false },
                        { name: 'image3', selected: false }
                    ]
                },
                {
                    container: { name: 'container3', selected: false },
                    elements: [
                        { name: 'text1', selected: false },
                        { name: 'text2', selected: false },
                        { name: 'image1', selected: false },
                        { name: 'image2', selected: false },
                        { name: 'image3', selected: false }
                    ]
                },
                {
                    container: { name: 'container4', selected: false },
                    elements: [
                        { name: 'text1', selected: false },
                        { name: 'text2', selected: false },
                        { name: 'image1', selected: false },
                        { name: 'image2', selected: false },
                        { name: 'image3', selected: false }
                    ]
                }
            ]
        },
        userContent: {
            save: true,
            favorite: true,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 2,
        name: 'post2',
        userContent: {
            save: false,
            favorite: true,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 3,
        name: 'post3'
    },
    {
        id: 4,
        name: 'post4',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 5,
        name: 'post5',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 6,
        name: 'post6'
    },
    {
        id: 7,
        name: 'post7'
    },
    {
        id: 8,
        name: 'post8'
    },

    {
        id: 9,
        name: 'post9'
    },
    {
        id: 10,
        name: 'post10',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 11,
        name: 'post11'
    },
    {
        id: 12,
        name: 'post12'
    },
    {
        id: 13,
        name: 'post13'
    },
    {
        id: 14,
        name: 'post14'
    },
    {
        id: 15,
        name: 'post15',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 16,
        name: 'post16',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    },
    {
        id: 17,
        name: 'post17',
        userContent: {
            save: true,
            favorite: false,
            share: true,
            interact: 'like'
        }
    }
]

