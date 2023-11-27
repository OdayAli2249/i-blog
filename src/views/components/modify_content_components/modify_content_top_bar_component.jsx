import React, { useState } from 'react';
import './modify_content_top_bar_style.scss';
import SpaceComponent from '../core/space_component';

function ModifyContentTopBarComponent(props) {

    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <ul className='modify-content-top-bar-root'>
            <li className={selectedItem == 0 ?
                'selected-modify-content-top-bar-item' : 'modify-content-top-bar-item'}
                onClick={() => {
                    if (selectedItem != 0)
                        setSelectedItem(0)
                }}>
                <h4 className='standard-text'>Blogs</h4>
            </li>
            <SpaceComponent size={'medium'} />
            <li className={selectedItem == 1 ?
                'selected-modify-content-top-bar-item' : 'modify-content-top-bar-item'}
                onClick={() => {
                    if (selectedItem != 1)
                        setSelectedItem(1)
                }}>
                <h4 className='standard-text'>Stories</h4>
            </li>
            <SpaceComponent size={'medium'} />
            <li className={selectedItem == 2 ?
                'selected-modify-content-top-bar-item' : 'modify-content-top-bar-item'}
                onClick={() => {
                    if (selectedItem != 2)
                        setSelectedItem(2)
                }}>
                <h4 className='standard-text'>Events</h4>
            </li>
            <SpaceComponent size={'medium'} />
            <li className={selectedItem == 3 ?
                'selected-modify-content-top-bar-item' : 'modify-content-top-bar-item'}
                onClick={() => {
                    if (selectedItem != 3)
                        setSelectedItem(3)
                }}>
                <h4 className='standard-text'>Posts</h4>
            </li>
            <SpaceComponent size={'medium'} />
            <li className={selectedItem == 4 ?
                'selected-modify-content-top-bar-item' : 'modify-content-top-bar-item'}
                onClick={() => {
                    if (selectedItem != 4)
                        setSelectedItem(4)
                }}>
                <h4 className='standard-text'>Adverts</h4>
            </li>
        </ul>
    );
}

export default ModifyContentTopBarComponent;