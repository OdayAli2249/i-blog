import React from 'react';
import './channel_join_requests_page_style.scss';
import PaginationComponent from '../components/core/pagination_components/pagination_component';
import { JoinRequestOperations, joinRequestsMiddleware } from '../../redux/middlewares/join_requests_middleware';
import JoinRequestCardComponent from '../components/cards/join_request_card_component';
import { useDispatch } from 'react-redux';

function ChannelJoinRequestsPage(props) {

    const dispatch = useDispatch();

    return (
        <div className='channel-join-requests-root'>
            <PaginationComponent
                initialView={{
                    grid: false,
                    list: true
                }}
                pageSize={6}                     // when start fetching data from I/O
                gridCardSize={'larg'}
                height='auto'                       // contatnt or auto
                width={'100%'}
                showView={false}
                showPages={true}
                fetchParams={{}}
                fetchData={joinRequestsMiddleware}
                selectedState={state => state.joinRequests}
                itemBuilder={(ID, joinRequest, _) => <JoinRequestCardComponent
                    key={ID}
                    joinRequest={joinRequest}
                    onIgnore={() => {
                        dispatch(joinRequestsMiddleware({
                            operation: JoinRequestOperations.IGNORE,
                            joinRequestId: joinRequest.id
                        }))
                    }}
                    onConfirm={() => {
                        dispatch(joinRequestsMiddleware({
                            operation: JoinRequestOperations.CONFIRM,
                            joinRequestId: joinRequest.id
                        }))
                    }}
                />}
            />
        </div>
    );
}

export default ChannelJoinRequestsPage;