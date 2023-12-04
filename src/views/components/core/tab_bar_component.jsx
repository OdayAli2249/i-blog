import React, { useState } from 'react';
import './tab_bar_style.scss';

function TabBarComponent(props) {

    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <ul className='tab-bar-root'>
            {props.items.map((item, index) => <li className={selectedItem == index ?
                'selected-tab-bar-item' : 'tab-bar-item'}
                onClick={() => {
                    if (selectedItem != index) {
                        setSelectedItem(index)
                        props.onChanged(index)
                    }
                }}>
                <h4 className='standard-text'>{item}</h4>
            </li>)}
        </ul>
    );
}

export default TabBarComponent;