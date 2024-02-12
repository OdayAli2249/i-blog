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
        content: {
            paragraphs: [
                {
                    container: {
                        name: 'container1',
                        position: {
                            x: 505,
                            y: 10
                        },
                        shape: 5,
                        color: 'blue',
                        dimension: {
                            width: 485,
                            height: 400
                        },
                        selected: false
                    },
                    elements: [
                        {
                            name: 'text1',
                            type: 'text',
                            color: 'black',
                            text: 'TEXT-1: This time last year, NewBreed’s resources were being used by church planters in 48 countries. At the time, we were overwhelmed by the enthusiasm of the global church, yet praying for greater impact.  Today, we are excited to share that our resources are now being used in 72 countries! That’s 50% more than last year!…',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 20,
                            selected: false,
                        },
                        {
                            name: 'text2',
                            type: 'text',
                            color: 'black',
                            text: 'TEXT-2: This time last year, NewBreed’s resources were being used by church planters in 48 countries. At the time, we were overwhelmed by the enthusiasm of the global church, yet praying for greater impact.  Today, we are excited to share that our resources are now being used in 72 countries! That’s 50% more than last year!…',
                            position: {
                                x: 10,
                                y: 200
                            },
                            size: 20,
                            selected: false,
                        },
                        {
                            name: 'image1',
                            type: 'image',
                            src: process.env.PUBLIC_URL + '/images/ar.jpg',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 100,
                            selected: false,
                        },
                        {
                            name: 'image2',
                            type: 'image',
                            src: process.env.PUBLIC_URL + '/images/ar.jpg',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 100,
                            selected: false
                        }
                    ]
                },
                {
                    container: {
                        name: 'container2',
                        position: {
                            x: 10,
                            y: 10
                        },
                        shape: 1,
                        color: 'blue',
                        dimension: {
                            width: 485,
                            height: 400
                        },
                        selected: false
                    },
                    elements: [
                        {
                            name: 'text3',
                            type: 'text',
                            color: 'black',
                            text: 'TEXT-3: This time last year, NewBreed’s resources were being used by church planters in 48 countries. At the time, we were overwhelmed by the enthusiasm of the global church, yet praying for greater impact.  Today, we are excited to share that our resources are now being used in 72 countries! That’s 50% more than last year!…',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 20,
                            selected: false,
                        },
                        {
                            name: 'text4',
                            type: 'text',
                            color: 'black',
                            text: 'TEXT-4: This time last year, NewBreed’s resources were being used by church planters in 48 countries. At the time, we were overwhelmed by the enthusiasm of the global church, yet praying for greater impact.  Today, we are excited to share that our resources are now being used in 72 countries! That’s 50% more than last year!…',
                            position: {
                                x: 10,
                                y: 200
                            },
                            size: 20,
                            selected: false,
                        },
                        {
                            name: 'image3',
                            type: 'image',
                            src: process.env.PUBLIC_URL + '/images/ar.jpg',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 100,
                            selected: false,
                        },
                        {
                            name: 'image4',
                            type: 'image',
                            src: process.env.PUBLIC_URL + '/images/ar.jpg',
                            position: {
                                x: 10,
                                y: 10
                            },
                            size: 100,
                            selected: false
                        }
                    ]
                }
            ]
        },
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

