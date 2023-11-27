import React, { useEffect } from 'react';
import './profile_details_layout_style.scss';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import ButtonComponent from '../core/button_component';
import MultipleSelectionComponent from '../core/multiple_selection_component';
import { useDispatch, useSelector } from 'react-redux';
import { userMiddleware } from '../../../redux/middlewares/user_middleware';

function ProfileDetailsLayoutComponent(props) {

    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = 1;

    const [_, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(userMiddleware({ id }))
    }, [])

    const options = ['posts', 'stories', 'blogs', 'adverts', 'events'];

    return (
        <div className='profile-details-layout-root'>
            <div className='profile-details-layout-row'>
                <div className='profile-details-layout-side-bar'>
                    <div className='profile-details-layout-side-bar-column'>

                        {userState.data && userState.data.item && <div className='profile-details-layout-side-bar-personal-info'>

                        </div>}
                        <MultipleSelectionComponent selectedOption={null} options={options}
                            column={true}
                            onOptionClicked={(idx) => {
                                setSearchParams({ ['type']: options[idx] })
                            }} />
                        <ButtonComponent />
                    </div>
                </div>
                <div className='profile-details-layout-body'>
                    {userState.data && userState.data.item ? <div className='profile-details-layout-profile-cover'>

                    </div> : <div className='profile-details-layout-profile-cover-place-holder' />}
                    {userState.data && userState.data.item ? <div className='profile-details-layout-profile-footer'>
                        {currentUser == id && <ButtonComponent />}
                        <div className='profile-details-layout-profile-row'>
                            <div className='profile-details-layout-profile-column'>
                                <h4 className='standard-text'>
                                    +++++++
                                </h4>
                                <h3 className='standard-text'>
                                    ++++++++++++++++++
                                </h3>
                            </div>
                            <div className='profile-details-layout-profile-avatar'>

                            </div>
                        </div>
                    </div> : <div className='profile-details-layout-profile-footer-place-holder' />}
                    <div className='profile-details-layout-content'>
                        <Outlet />
                    </div>
                </div>
                <div className='profile-details-layout-side-bar-place-holder'>

                </div>
            </div>
        </div>
    );
}

export default ProfileDetailsLayoutComponent;