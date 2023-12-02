import { Actions } from "../actions";


export const futureEventsMiddleware = (params) => {

    function mapWeeksToDates(next3Weeks, A) {
        const dateMap = new Map();

        next3Weeks.forEach((week) => {
            week.forEach((day) => {
                const currentDate = day.date;

                const matchingDates = A
                    .filter((item) => item.date === currentDate)
                    .map((item) => ({ date: item.date, /* other properties */ }));

                dateMap.set(currentDate, matchingDates);
            });
        });

        return dateMap;
    }

    function getNext3Weeks() {
        const currentDate = new Date();
        const weeksData = [];

        for (let i = 0; i < 3; i++) {
            const weekData = [];

            for (let j = 0; j < 7; j++) {
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + i * 7 + j);

                const date = currentDate.toISOString().split('T')[0];
                const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

                weekData.push({ date, day });
            }

            weeksData.push(weekData);
        }

        return weeksData;
    }


    return async (dispatch) => {
        dispatch({ type: Actions.GET_FUTURE_EVENTS_LOADING });
        var w = getNext3Weeks();
        var r = mapWeeksToDates(w, posts)
        const fialureOrData = {
            result: 'success',
            response: {
                data: r
            }
        };
        // const fialureOrData = {
        //     failure: { message: 'something went wrong', code: 400 }
        // };
        await sleep(2000);
        fialureOrData.result == ProcessResult.SUCCESS ?
            dispatch({ type: Actions.GET_FUTURE_EVENTS_SUCCESS, payload: { items: fialureOrData.response.data } }) :
            dispatch({ type: Actions.GET_FUTURE_EVENTS_FAILURE, payload: { failure: fialureOrData.failure } });
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
        date: '2023-12-06',
        id: 1,
        name: 'event1'
    },
    {
        date: '2023-12-13',
        id: 2,
        name: 'event2'
    },
    {
        date: '2023-12-20',
        id: 3,
        name: 'event3'
    },
    {
        date: '2023-12-20',
        id: 4,
        name: 'event4'
    },
    {
        date: '2023-12-20',
        id: 5,
        name: 'event5'
    },
    {
        date: '2023-12-09',
        id: 6,
        name: 'event6'
    },
    {
        date: '2023-12-16',
        id: 7,
        name: 'event7'
    },
    {
        date: '2023-12-22',
        id: 8,
        name: 'event8'
    },
    {
        date: '2023-12-07',
        id: 9,
        name: 'event9'
    },
    {
        date: '2023-12-15',
        id: 10,
        name: 'event10'
    },
    {
        date: '2023-12-17',
        id: 11,
        name: 'event11'
    },
    {
        date: '2023-12-17',
        id: 12,
        name: 'event12'
    },
    {
        date: '2023-12-17',
        id: 13,
        name: 'event13'
    },
    {
        date: '2023-12-18',
        id: 14,
        name: 'event14'
    }
]