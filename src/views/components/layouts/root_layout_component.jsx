import React from 'react';
import './root_layout_style.scss';
import ProfileSideBarComponent from './profile_side_bar_component';
import NavigationBarComponent from './navigation_bar_component';
import { Outlet } from 'react-router-dom';

function RootLayoutComponent(props) {
    return (
        <div className='root-layout-root'>
            <div className='left-side-bar-place-holder'>

            </div>
            <ProfileSideBarComponent />
            <NavigationBarComponent />
            <div className='root-layout-column'>
                <div className='navigation-bar-place-holder'>

                </div>
                <div className='app-body-place-holder'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default RootLayoutComponent;