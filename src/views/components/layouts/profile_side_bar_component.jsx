import React from 'react';
import './profile_side_bar_style.scss';

function ProfileSideBarComponent(props) {
    return (
        <div className='profile-side-bar'>
            <div className='profile-side-bar-icon' />
            <div className='profile-side-bar-icon' >
                <a href=''>++</a>
            </div>
            <div className='profile-side-bar-first-space' />
            <div className='profile-side-bar-icon' >
                <a href=''>++</a>
            </div>
            <div className='profile-side-bar-icon' >
                <a href=''>++</a>
            </div>
            <div className='profile-side-bar-icon' >
                <a href=''>++</a>
            </div>
            <div className='profile-side-bar-icon' >
                <a href=''>++</a>
            </div>
            <div className='profile-side-bar-second-space' />
            <div className='profile-side-bar-icon' />
        </div>
    );
}

export default ProfileSideBarComponent;