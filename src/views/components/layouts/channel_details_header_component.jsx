import React, { useEffect, useState } from 'react';
import './channel_details_header_style.scss';
import { Outlet, useParams } from 'react-router-dom';
import ButtonComponent from '../core/button_component';
import SpaceComponent from '../core/space_component';
import { useDispatch, useSelector } from 'react-redux';
import { ChannelOperations, channelMiddleware } from '../../../redux/middlewares/channel_middleware';
import DialogComponent from '../core/dialog_components/dialog_component';
import SubscribtionStatusComponent from '../channels/subscribtion_status_component';
import PopUpComponent from '../pop_up_component';

function ChannelDetailsHeaderComponent(props) {

    const state = useSelector(state => state.channel);
    const [showSubscribtionDialog, setShowSubscribtionDialog] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showCategoriesPopUp, setShowCategoriesPopUp] = useState(false);

    const user = true;

    useEffect(() => {
        dispatch(channelMiddleware({ id }))
    }, [])

    return (
        <div className='channel-header-root'  >
            {state.data && state.data.item ?
                <div className='channel-header-cover'>
                    <ButtonComponent onClicked={() => { }} />
                </div> : <div style={{ height: state.data && state.data.item ? null : '300px' }}></div>}
            {state.data && state.data.item ?
                <div className='channel-header-footer'>
                    <div className='channel-header-sections'>
                        <ButtonComponent onClicked={() => { }} />
                        <ul className='channel-header-sections-list'>
                            <li>
                                <a href={'/channel/' + id + '/admins'}>++++</a>
                            </li>
                            <SpaceComponent size={'medium'} />
                            <li>
                                <a href={'/channel/' + id + '/categories'}>++++</a>
                            </li>
                            <li>

                                {showCategoriesPopUp === true && <PopUpComponent top={'50px'} height={'auto'} >
                                    <ul className='channel-header-categories-list'>
                                        <li>
                                            <a href={'/channel/' + id + '/posts'}>posts</a>
                                        </li>
                                        <SpaceComponent size={'medium'} />
                                        <li>
                                            <a href={'/channel/' + id + '/events'}>events</a>
                                        </li>
                                        <SpaceComponent size={'medium'} />
                                        <li>
                                            <a href={'/channel/' + id + '/stories'}>stories</a>
                                        </li>
                                        <SpaceComponent size={'medium'} />
                                        <li>
                                            <a href={'/channel/' + id + '/blogs'}>blogs</a>
                                        </li>
                                        <SpaceComponent size={'medium'} />
                                        <li>
                                            <a href={'/channel/' + id + '/adverts'}>adverts</a>
                                        </li>
                                    </ul>
                                </PopUpComponent>}
                                <ButtonComponent width={'20px'}
                                    onClicked={() => { setShowCategoriesPopUp(!showCategoriesPopUp) }} />
                            </li>
                            <SpaceComponent size={'medium'} />
                            <li>
                                <a href={'/channel/' + id + '/join-requests'}>++++</a>
                            </li>
                            <SpaceComponent size={'medium'} />
                            <li>
                                <a href={'/channel/' + id + '/about'}>++++</a>
                            </li>
                        </ul>
                    </div>
                    <div className='channel-header-profile'>
                        <div className='channel-header-profile-column'>
                            <h3 className='standard-text'>++++++</h3>   {/* name */}
                            <h5 className='standard-text'>++++++</h5>   {/* meta: number of subscribers - number of : posts - events.. */}
                            <h5 className='standard-text'>++++++</h5>   {/* description */}
                            {state.data.item.userChannel.role == 'admin' && <h5 className='standard-text'>Admin</h5>}
                            {state.data.item.userChannel.role != 'admin' &&
                                <div className='channel-header-profile-buttons-row'>
                                    <ButtonComponent
                                        label={(state.data.item.userChannel.join == 'Sent' ? 'Join Sent' :
                                            user && state.data.item.userChannel.join == 'Rejected' ? 'Rejected' : 'Join') +
                                            (state.joinLoading ? ' loading..' : '')}
                                        onClicked={() => {
                                            if (user && state.data.item.userChannel.join != 'Rejected')
                                                dispatch(channelMiddleware({
                                                    operation: ChannelOperations.CHANGE_JOIN_STATUS,
                                                    joinStatus: state.data.item.userChannel.join != 'Sent' ? 'Sent' : 'Cancel',
                                                    id: id,
                                                }))
                                        }} />
                                    <ButtonComponent
                                        label={(state.data.item.userChannel.subscribtion == 'Unsubscribe' ? 'Subscrib' : 'Subscribed') +
                                            (state.subscribtionLoading ? ' loading..' : '')}
                                        onClicked={() => {
                                            if (user)
                                                if (state.data.item.userChannel.subscribtion == 'Unsubscribe')
                                                    dispatch(channelMiddleware({
                                                        operation: ChannelOperations.CHANGE_SUBSCRIBTION_STATUS,
                                                        subscribtionStatus: 'Personalized',
                                                        id: id,
                                                    }))
                                                else setShowSubscribtionDialog(true)
                                        }} />
                                </div>}
                        </div>
                        <div className='channel-header-profile-avatar'>

                        </div>
                    </div>
                </div> : <div style={{ height: state.data && state.data.item ? null : '150px' }}></div>}
            <div className='channel-header-body'>
                <Outlet />
            </div>
            {showSubscribtionDialog && <DialogComponent
                show={showSubscribtionDialog}
                height='40'
                width='60'
                onClose={() => {
                    setShowSubscribtionDialog(false)
                }}>
                <SubscribtionStatusComponent
                    subscribtionStatus={state.data.item.userChannel.subscribtion}
                    onSubscribtionStatusSelected={(status) => {
                        dispatch(channelMiddleware({
                            operation: ChannelOperations.CHANGE_SUBSCRIBTION_STATUS,
                            subscribtionStatus: status,
                            id: id,
                        }))
                        setShowSubscribtionDialog(false);
                    }} />
            </DialogComponent>}
        </div>
    );
}

export default ChannelDetailsHeaderComponent;