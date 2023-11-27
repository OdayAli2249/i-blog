import React from 'react';
import './navigation_bar_style.scss';
import SpaceComponent from '../core/space_component';

function NavigationBarComponent(props) {
    return (
        <div className='navigation-bar'>
            <ul className='navigation-bar-list'>
                <li>
                    <a href=''>++++</a>
                </li>
                <SpaceComponent size={'medium'} />
                <li>
                    <a href=''>++++</a>
                </li>
                <SpaceComponent size={'medium'} />
                <li>
                    <a href=''>++++</a>
                </li>
            </ul>
        </div>
    );
}

export default NavigationBarComponent;