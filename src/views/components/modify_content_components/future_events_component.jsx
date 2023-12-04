import React, { useEffect } from 'react';
import './future_events_style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { futureEventsMiddleware } from '../../../redux/middlewares/future_events_middleware';

function FutureEventsComponent(props) {

    const dispatch = useDispatch();
    const futureEvents = useSelector(state => state.futureEvents);
    useEffect(() => {
        dispatch(futureEventsMiddleware());
    }, [])

    var items = []
    var squareIndex = 0
    var co = futureEvents.data && futureEvents.data.items ? futureEvents.data.items.forEach(function (value, key) {
        items.push(<div key={squareIndex++} className='future-event-square'></div>)
    }) : <></>;

    return (
        <div className='future-events-root' style={{ display: props.hidden ? 'none' : null }}>
            {items}
        </div>
    );
}

export default FutureEventsComponent